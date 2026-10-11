import type { CaseStudyTheme as Theme } from '@/lib/case-studies'

type Props = {
  theme: Theme
}

// Case studies recolor the whole page, including the body background, so the
// palette goes on :root rather than a wrapper element
const CaseStudyTheme = ({ theme }: Props) => {
  const css = `:root {
  --theme-color-primary: ${theme.colorPrimary};
  --theme-color-bg-light: ${theme.colorBGLight};
  --theme-color-bg-dark: ${theme.colorBGDark};
  --theme-color-heading: ${theme.colorHeading};
  --theme-color-highlight: ${theme.colorHighlight};
}`

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

export default CaseStudyTheme
