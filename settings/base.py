from .core import *

INSTALLED_APPS += [
    'backend', 
    'webpack_loader'
]

MEDIA_ROOT = os.path.join(os.environ['HOME'], 'media')
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# webpack configurations
STATICFILES_DIRS = (
    #This lets Django's collectstatic store our bundles
    os.path.join(BASE_DIR, 'frontend', 'static'), 
)

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'frontend/',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend', 'webpack-stats.json'),
    }
}