import type { CaseStudyTheme as Theme } from '@/lib/case-studies'
import { titleColors } from '@/lib/color'

type Props = {
  theme: Theme
}

// Case studies recolor the whole page, including the body background, so the
// palette goes on :root rather than a wrapper element. The title color differs by
// theme so the project's color always reads (see titleColors).
const CaseStudyTheme = ({ theme }: Props) => {
  const title = titleColors({ primary: theme.colorPrimary, secondary: theme.colorSecondary, darkBackground: theme.colorBGLight })
  const css = `:root {
  --theme-color-primary: ${theme.colorPrimary};
  --theme-color-bg-light: ${theme.colorBGLight};
  --theme-color-bg-dark: ${theme.colorBGDark};
  --theme-color-heading: ${theme.colorHeading};
  --theme-color-highlight: ${theme.colorHighlight};
  --theme-color-title: ${title.dark};
}
html[data-prefers-color-scheme="light"] {
  --theme-color-title: ${title.light};
}`

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

export default CaseStudyTheme
