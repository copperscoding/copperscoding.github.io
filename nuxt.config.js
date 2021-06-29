import colors from 'vuetify/es5/util/colors'

export default {


    // Build Configuration: https://go.nuxtjs.dev/config-build
    'build': {
    },


    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    'buildModules': [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources'
    ],


    // Auto import components: https://go.nuxtjs.dev/config-components
    'components': true,


    // Global CSS: https://go.nuxtjs.dev/config-css
    'css': ['@/assets/style.css'],


    // Global page headers: https://go.nuxtjs.dev/config-head
    'head': {
        'htmlAttrs': {
            'lang': 'en'
        },
        'link': [
            {'href': '/favicon.png',
                'rel': 'icon',
                'type': 'image/x-icon'}
        ],
        'meta': [
            {'charset': 'utf-8'},
            {'content': 'width=device-width, initial-scale=1',
                'name': 'viewport'},
            {'content': '',
                'hid': 'description',
                'name': 'description'},
            {'content': 'telephone=no',
                'name': 'format-detection'}
        ],
        'title': 'Copper\'s Coding'
    },


    // Modules: https://go.nuxtjs.dev/config-modules
    'modules': ['@nuxtjs/style-resources'],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    'plugins': [],


    'styleResources': {
        'scss': ['./assets/_global.scss']
    },


    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    'vuetify': {
        'customVariables': ['~/assets/variables.sass'],
        'theme': {
            'dark': true,
            'themes': {
                'dark': {
                    'accent': colors.grey.darken3,
                    'error': colors.deepOrange.accent4,
                    'info': colors.teal.lighten1,
                    'primary': colors.blue.darken2,
                    'secondary': colors.amber.darken3,
                    'success': colors.green.accent3,
                    'warning': colors.amber.base
                }
            }
        }
    }
}
