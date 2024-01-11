import { ReactNode, CSSProperties } from 'react'

interface HtmlProps {
    children: ReactNode;
    styles?: string | CSSProperties;
}

export function Html({ children, styles }: HtmlProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style>{styles as ReactNode}</style>
            </head>

            <body>
                <div id="app" dangerouslySetInnerHTML={{ __html: children as string }} />
            </body>
        </html>
    );
}