/**
 * Centralized Image Caching System for AMDDAS Foods
 * 
 * HOW TO USE:
 * 1. To ENABLE caching: Keep ENABLE_CACHE = true
 * 2. To DISABLE caching: Change ENABLE_CACHE = false
 * 3. Import and use in any component:
 *    import { preloadImages, getCachedImage } from '../utils/imageCache';
 * 
 * FEATURES:
 * - Automatic image preloading
 * - Memory caching with Map
 * - Browser cache optimization
 * - Progressive loading
 * - Cache size management
 * - Performance monitoring
 */

// ===== TOGGLE CACHING ON/OFF =====
const ENABLE_CACHE = true; // Set to false to disable all caching
// ==================================

class ImageCacheManager {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
    this.stats = {
      hits: 0,
      misses: 0,
      totalLoaded: 0,
      errors: 0
    };
    this.maxCacheSize = 100; // Maximum number of images to cache
    this.isEnabled = ENABLE_CACHE;
    
    // Initialize global cache reference
    if (typeof window !== 'undefined') {
      window.amddas_image_cache = this.cache;
      window.amddas_cache_stats = this.stats;
    }
  }

  /**
   * Preload a single image with caching
   */
  preloadImage(src, priority = 'normal') {
    if (!this.isEnabled) {
      return Promise.resolve(null);
    }

    // Return cached image if exists
    if (this.cache.has(src)) {
      this.stats.hits++;
      return Promise.resolve(this.cache.get(src));
    }

    // Return existing loading promise if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    // Create new loading promise
    const loadingPromise = new Promise((resolve, reject) => {
      const img = new Image();
      
      // Set cache headers for better browser caching
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Cache management - remove oldest if cache is full
        if (this.cache.size >= this.maxCacheSize) {
          const firstKey = this.cache.keys().next().value;
          this.cache.delete(firstKey);
        }
        
        // Store in cache
        this.cache.set(src, img);
        this.stats.totalLoaded++;
        this.stats.misses++;
        
        // Clean up loading promise
        this.loadingPromises.delete(src);
        
        resolve(img);
      };

      img.onerror = (error) => {
        this.stats.errors++;
        this.loadingPromises.delete(src);
        console.error(`Failed to load image: ${src}`);
        reject(error);
      };

      // Set priority loading
      if (priority === 'high') {
        img.loading = 'eager';
      }
      
      img.src = src;
    });

    this.loadingPromises.set(src, loadingPromise);
    return loadingPromise;
  }

  /**
   * Preload multiple images with progressive loading
   */
  preloadImages(imagePaths, options = {}) {
    if (!this.isEnabled) {
      return Promise.resolve([]);
    }

    const { 
      delay = 200, 
      highPriorityCount = 1,
      onProgress = null 
    } = options;

    const promises = imagePaths.map((src, index) => {
      const priority = index < highPriorityCount ? 'high' : 'normal';
      const loadDelay = index === 0 ? 0 : index * delay;

      return new Promise((resolve) => {
        setTimeout(() => {
          this.preloadImage(src, priority)
            .then((img) => {
              if (onProgress) {
                onProgress({
                  loaded: index + 1,
                  total: imagePaths.length,
                  src,
                  img
                });
              }
              resolve({ src, img, success: true });
            })
            .catch((error) => {
              if (onProgress) {
                onProgress({
                  loaded: index + 1,
                  total: imagePaths.length,
                  src,
                  error: true
                });
              }
              resolve({ src, error, success: false });
            });
        }, loadDelay);
      });
    });

    return Promise.all(promises);
  }

  /**
   * Get cached image or return null
   */
  getCachedImage(src) {
    if (!this.isEnabled) {
      return null;
    }
    
    if (this.cache.has(src)) {
      this.stats.hits++;
      return this.cache.get(src);
    }
    
    this.stats.misses++;
    return null;
  }

  /**
   * Check if image is cached
   */
  isCached(src) {
    return this.isEnabled && this.cache.has(src);
  }

  /**
   * Clear all cached images
   */
  clearCache() {
    this.cache.clear();
    this.loadingPromises.clear();
    this.stats = {
      hits: 0,
      misses: 0,
      totalLoaded: 0,
      errors: 0
    };
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      ...this.stats,
      cacheSize: this.cache.size,
      hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0,
      isEnabled: this.isEnabled
    };
  }

  /**
   * Enable/disable caching at runtime
   */
  toggleCache(enabled) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.clearCache();
    }
  }
}

// Create singleton instance
const imageCacheManager = new ImageCacheManager();

// Export functions for easy use
export const preloadImages = (imagePaths, options) => {
  return imageCacheManager.preloadImages(imagePaths, options);
};

export const preloadImage = (src, priority) => {
  return imageCacheManager.preloadImage(src, priority);
};

export const getCachedImage = (src) => {
  return imageCacheManager.getCachedImage(src);
};

export const isCached = (src) => {
  return imageCacheManager.isCached(src);
};

export const clearImageCache = () => {
  return imageCacheManager.clearCache();
};

export const getCacheStats = () => {
  return imageCacheManager.getStats();
};

export const toggleImageCache = (enabled) => {
  return imageCacheManager.toggleCache(enabled);
};

// Default export
export default imageCacheManager;

/**
 * USAGE EXAMPLES:
 * 
 * // Basic usage in any component
 * import { preloadImages } from '../utils/imageCache';
 * 
 * useEffect(() => {
 *   const images = ['/images/img1.jpg', '/images/img2.jpg'];
 *   preloadImages(images, {
 *     delay: 200,
 *     highPriorityCount: 1,
 *     onProgress: ({ loaded, total }) => {
 *       console.log(`Loaded ${loaded}/${total} images`);
 *     }
 *   });
 * }, []);
 * 
 * // Check if image is cached before using
 * import { isCached, getCachedImage } from '../utils/imageCache';
 * 
 * const handleImageLoad = (src) => {
 *   if (isCached(src)) {
 *     const cachedImg = getCachedImage(src);
 *     // Use cached image
 *   }
 * };
 * 
 * // Get cache performance stats
 * import { getCacheStats } from '../utils/imageCache';
 * 
 * const stats = getCacheStats();
 * console.log('Cache hit rate:', stats.hitRate);
 */
