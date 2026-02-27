import type { Preview } from "@storybook/react-vite";
import "../src/lib/internal-styles/main.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
