# Sunnyside Agency Landing Page

## Analyze the design and decide how to split it into components

- Navigation Bar Component:

This includes the logo and the set of navigation links. It can be made reusable for different pages within the site.

- Hero Section Component:
  The large headline and the background image with the downward arrow can be templated so that the text and image can be swapped out for different pages or campaigns.

- Service Offering Card Component:
  Each service offering has a title, a descriptive paragraph, and a call-to-action button. These cards can be standardized into a single component, making it easy to add or update services offered.

- Call-to-Action Button Component:
  The "LEARN MORE" button can be reused throughout the site wherever a call to action is needed.

- Skills Showcase Component:
  Each skill or service block, with an image and text, can be a component. The content can be made dynamic to change based on the skill or service being highlighted.

- Testimonial Card Component:
  The client photo, name, title, and testimonial text form a card-like component that can be used wherever testimonials are needed.

- Image Gallery Item Component:
  Each image in the gallery section, potentially with captions or overlays, can be created as a component to allow for easy updates or additions to the gallery.

- Footer Component:
  The footer with navigation links and social media icons is typically reused on every page.

- Social Media Icon Component:
  Each social media icon can be a button component that links to the respective social media page.

## Styled-components steps

- [Install styled-components](https://styled-components.com/docs/basics#installation)

```bash
pnpm i styled-components
```

- Display file name

```bash
pnpm i babel-plugin-styled-components
```

- Go to `vite.config.ts`

```javascript
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
});
```
