import type { Meta, Preview } from "@storybook/react"
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-react-router-v6"
import "../src/index.css"

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactRouter: reactRouterParameters({
      location: {
        searchParams: "?step=1",
      },
      routing: { path: "/" },
    }),
  },
} as Meta

export default preview
