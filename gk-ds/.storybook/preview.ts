import type { Preview } from '@storybook/web-components-vite'
import { setCustomElementsManifest } from '@storybook/web-components'

// Import the custom elements manifest using the virtual import from vite-plugin-cem
import customElementsManifest from 'virtual:vite-plugin-cem/custom-elements-manifest'

// Import all components to register them
import '../lib'

// Set the custom elements manifest for Storybook
setCustomElementsManifest(customElementsManifest)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;