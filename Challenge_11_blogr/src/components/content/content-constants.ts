interface DescriptionType {
  id?: number;
  title: string;
  description: string;
}

interface ContentsType {
  header: string | null;
  content: DescriptionType[];
}

const SectionContent_A: ContentsType = {
  header: "Designed for the future",
  content: [
    {
      id: 1,
      title: "Introducing an extensible editor",
      description:
        "Blogr features an exceedingly intuitive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      id: 2,
      title: "Robust content management",
      description:
        "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
    },
  ],
};

const SectionContent_B = {
  content: [
    {
      id: 1,
      title: "Introducing an extensible editor",
      description:
        "Blogr is a free and open source application backed by a large community if helpful developer. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      id: 2,
      title: "Powerful tooling",
      description:
        "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ],
};

const SectionContent_C = {
  header: "State of the Art Infrastructure",
  description:
    "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where you readers are, keeping your site competitive.",
};

export { SectionContent_A, SectionContent_B, SectionContent_C };

export type { DescriptionType, ContentsType };
