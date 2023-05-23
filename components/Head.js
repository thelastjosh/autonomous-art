import Head from 'next/head';

const TITLE = "Autonomous Art"
const DESC = "To be autonomous is to be free from external control. Autonomous art is art that is autonomous and which acts in order to ensure its autonomy. Often, it is art that owns itself or which cannot be owned."

export default function HeadComponent() {
  return <Head>
    <title>{TITLE}</title>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Roboto+Mono&display=swap" rel="stylesheet" />

    {/* Place any emoji as text wrapped in svg for favicon */}
    <link rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22> 
      ✍️ 
      </text></svg>"/>

    <meta property="og:title" content={TITLE} />
    <meta property="og:description"
      content={DESC} />
    <meta property="og:image" content="/og-image.png" />
    <meta name="twitter:card" content="summary" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://autonomous-art.vercel.app/" />
    <meta property="og:title" content="Autonomous Art" />
    <meta property="og:description" content="To be autonomous is to be free from external control. Autonomous art is art that is autonomous and which acts in order to ensure its autonomy. Often, it is art that owns itself or which cannot be owned. In this artifact, we describe what autonomous art is, what it is not, give examples, and comment on various facets of the artform." />
    <meta property="og:image" content="/og-image.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://autonomous-art.vercel.app/" />
    <meta property="twitter:title" content="Autonomous Art" />
    <meta property="twitter:description" content="To be autonomous is to be free from external control. Autonomous art is art that is autonomous and which acts in order to ensure its autonomy. Often, it is art that owns itself or which cannot be owned. In this artifact, we describe what autonomous art is, what it is not, give examples, and comment on various facets of the artform." />
    <meta property="twitter:image" content="https://autonomous-art.vercel.app/og-image.png" />
  </Head>
}
