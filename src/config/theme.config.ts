/**
 * Theme Configuration
 *
 * Centralized theme settings for easy brand customization.
 * Update these values to match your brand identity.
 */

export const themeConfig = {
  // Brand Colors - Used throughout the application
  colors: {
    // Primary brand color (used for main CTAs, links, highlights)
    primary: 'purple', // Options: blue, green, red, purple, indigo, etc.

    // Secondary accent color (used for secondary elements)
    secondary: 'fuchsia',

    // Tertiary accent (subtle accents)
    tertiary: 'violet',

    // Highlight color (deep accents, trust elements)
    highlight: 'indigo',
  },

  // Typography Settings
  typography: {
    // Font families (Google Fonts)
    fonts: {
      body: 'Inter', // Main body text
      heading: 'Outfit', // Headings
      accent: 'Ubuntu', // Special accents
    },

    // Font sizes are defined in Tailwind config
  },

  // Layout Settings
  layout: {
    // Container max width
    containerMaxWidth: '7xl', // Options: '6xl', '7xl', 'full'

    // Section padding (vertical)
    sectionPadding: {
      mobile: 'py-16',
      desktop: 'md:py-24',
    },
  },

  // Animation preferences
  animations: {
    // Enable/disable page transitions
    pageTransitions: true,

    // Enable/disable scroll animations
    scrollAnimations: true,

    // Animation duration
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
  },

  // Border radius preferences
  borderRadius: {
    button: 'rounded-lg',
    card: 'rounded-xl',
    input: 'rounded-lg',
  },
};

/**
 * Preset Themes
 *
 * Quick theme presets for common brand styles.
 * Copy the values from any preset to themeConfig above.
 */
export const themePresets = {
  // Corporate/Professional (Blue theme)
  corporate: {
    colors: {
      primary: 'blue',
      secondary: 'cyan',
      tertiary: 'sky',
      highlight: 'indigo',
    },
  },

  // Eco/Nature (Green theme)
  eco: {
    colors: {
      primary: 'green',
      secondary: 'emerald',
      tertiary: 'lime',
      highlight: 'teal',
    },
  },

  // Energy/Bold (Orange theme)
  energy: {
    colors: {
      primary: 'orange',
      secondary: 'amber',
      tertiary: 'yellow',
      highlight: 'red',
    },
  },

  // Luxury/Premium (Purple theme) - Current
  luxury: {
    colors: {
      primary: 'purple',
      secondary: 'fuchsia',
      tertiary: 'violet',
      highlight: 'indigo',
    },
  },

  // Bold/Passionate (Red theme)
  bold: {
    colors: {
      primary: 'red',
      secondary: 'rose',
      tertiary: 'pink',
      highlight: 'orange',
    },
  },

  // Tech/Modern (Slate theme)
  tech: {
    colors: {
      primary: 'slate',
      secondary: 'zinc',
      tertiary: 'gray',
      highlight: 'blue',
    },
  },
};

export default themeConfig;
