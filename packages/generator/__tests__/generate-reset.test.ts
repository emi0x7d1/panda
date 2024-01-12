import type { ConfigResultWithHooks } from '@pandacss/types'
import { describe, expect, test } from 'vitest'
import { Generator } from '../src'
import { fixtureDefaults } from '@pandacss/fixture'

const resetCss = (config: ConfigResultWithHooks) => {
  const ctx = new Generator(config)
  const sheet = ctx.createSheet()
  ctx.appendCssOfType('preflight', sheet)
  return sheet.toCss({ optimize: true })
}

describe('generate reset', () => {
  test('should work', () => {
    const css = resetCss({
      ...fixtureDefaults,
      config: {
        ...fixtureDefaults.config,
        preflight: true,
      },
    })

    expect(css).toMatchInlineSnapshot(`
      "@layer reset {
        * {
          margin: 0;
          padding: 0;
          font: inherit;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: var(--global-color-border, currentColor);
        }

        html {
          line-height: 1.5;
          --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -moz-tab-size: 4;
          tab-size: 4;
          font-family: var(--global-font-body, var(--font-fallback));
        }

        hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }

        body {
          height: 100%;
          line-height: inherit;
        }

        img {
          border-style: none;
        }

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block;
          vertical-align: middle;
        }

        img,
        video {
          max-width: 100%;
          height: auto;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
        }

        ol,
        ul {
          list-style: none;
        }

        code,
        kbd,
        pre,
        samp {
          font-size: 1em;
        }

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          color: inherit;
        }

        button,
        select {
          text-transform: none;
        }

        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }

        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: var(--global-color-placeholder, #9ca3af);
        }

        textarea {
          resize: vertical;
        }

        summary {
          display: list-item;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        dialog {
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }

        abbr:where([title]) {
          text-decoration: underline dotted;
        }

        b,
        strong {
          font-weight: bolder;
        }

        code,
        kbd,
        samp,
        pre {
          font-size: 1em;
          --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
          font-family: var(--global-font-mono, var(--font-mono-fallback));
        }

        input[type='text'],
        input[type='email'],
        input[type='search'],
        input[type='password'] {
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        input[type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        ::-webkit-search-decoration,
        ::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }

        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        input[type='number']{
          -moz-appearance: textfield;
        }

        :-moz-ui-invalid {
          box-shadow: none;
        }

        :-moz-focusring {
          outline: auto;
        }
      }"
    `)
  })

  test('should work with scope', () => {
    const css = resetCss({
      ...fixtureDefaults,
      config: {
        ...fixtureDefaults.config,
        preflight: { scope: '.pd-reset' },
      },
    })

    expect(css).toMatchInlineSnapshot(`
      "@layer reset {
        .pd-reset * {
          margin: 0;
          padding: 0;
          font: inherit;
        }

        .pd-reset *,
        .pd-reset *::before,
        .pd-reset *::after {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: var(--global-color-border, currentColor);
        }

        .pd-reset  {
          line-height: 1.5;
          --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -moz-tab-size: 4;
          tab-size: 4;
          font-family: var(--global-font-body, var(--font-fallback));
        }

        .pd-reset hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }

        body {
          height: 100%;
          line-height: inherit;
        }

        .pd-reset img {
          border-style: none;
        }

        .pd-reset img,
        .pd-reset svg,
        .pd-reset video,
        .pd-reset canvas,
        .pd-reset audio,
        .pd-reset iframe,
        .pd-reset embed,
        .pd-reset object {
          display: block;
          vertical-align: middle;
        }

        .pd-reset img,
        .pd-reset video {
          max-width: 100%;
          height: auto;
        }

        .pd-reset p,
        .pd-reset h1,
        .pd-reset h2,
        .pd-reset h3,
        .pd-reset h4,
        .pd-reset h5,
        .pd-reset h6 {
          overflow-wrap: break-word;
        }

        .pd-reset ol,
        .pd-reset ul {
          list-style: none;
        }

        .pd-reset code,
        .pd-reset kbd,
        .pd-reset pre,
        .pd-reset samp {
          font-size: 1em;
        }

        .pd-reset button,
        .pd-reset [type='button'],
        .pd-reset [type='reset'],
        .pd-reset [type='submit'] {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }

        .pd-reset button,
        .pd-reset input,
        .pd-reset optgroup,
        .pd-reset select,
        .pd-reset textarea {
          color: inherit;
        }

        .pd-reset button,
        .pd-reset select {
          text-transform: none;
        }

        .pd-reset table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }

        .pd-reset input::placeholder,
        .pd-reset textarea::placeholder {
          opacity: 1;
          color: var(--global-color-placeholder, #9ca3af);
        }

        .pd-reset textarea {
          resize: vertical;
        }

        .pd-reset summary {
          display: list-item;
        }

        .pd-reset small {
          font-size: 80%;
        }

        .pd-reset sub,
        .pd-reset sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        .pd-reset sub {
          bottom: -0.25em;
        }

        .pd-reset sup {
          top: -0.5em;
        }

        .pd-reset dialog {
          padding: 0;
        }

        .pd-reset a {
          color: inherit;
          text-decoration: inherit;
        }

        .pd-reset abbr:where([title]) {
          text-decoration: underline dotted;
        }

        .pd-reset b,
        .pd-reset strong {
          font-weight: bolder;
        }

        .pd-reset code,
        .pd-reset kbd,
        .pd-reset samp,
        .pd-reset pre {
          font-size: 1em;
          --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
          font-family: var(--global-font-mono, var(--font-mono-fallback));
        }

        .pd-reset input[type='text'],
        .pd-reset input[type='email'],
        .pd-reset input[type='search'],
        .pd-reset input[type='password'] {
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .pd-reset input[type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        .pd-reset ::-webkit-search-decoration,
        .pd-reset ::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }

        .pd-reset ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }

        .pd-reset input[type='number']::-webkit-inner-spin-button,
        .pd-reset input[type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        .pd-reset input[type='number']{
          -moz-appearance: textfield;
        }

        .pd-reset :-moz-ui-invalid {
          box-shadow: none;
        }

        .pd-reset :-moz-focusring {
          outline: auto;
        }
      }"
    `)
  })

  test('should work with callback scope', () => {
    const css = resetCss({
      ...fixtureDefaults,
      config: {
        ...fixtureDefaults.config,
        preflight: { scope: (selector) => `${selector}.pd-reset ` },
      },
    })

    expect(css).toMatchInlineSnapshot(`
      "@layer reset  {
        *.pd-reset  {
          margin: 0;
          padding: 0;
          font: inherit;
        }

        *.pd-reset ,
        *::before.pd-reset ,
        *::after.pd-reset  {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: var(--global-color-border, currentColor);
        }

        .pd-reset  {
          line-height: 1.5;
          --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -moz-tab-size: 4;
          tab-size: 4;
          font-family: var(--global-font-body, var(--font-fallback));
        }

        hr.pd-reset  {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }

        body {
          height: 100%;
          line-height: inherit;
        }

        img.pd-reset  {
          border-style: none;
        }

        img.pd-reset ,
        svg.pd-reset ,
        video.pd-reset ,
        canvas.pd-reset ,
        audio.pd-reset ,
        iframe.pd-reset ,
        embed.pd-reset ,
        object.pd-reset  {
          display: block;
          vertical-align: middle;
        }

        img.pd-reset ,
        video.pd-reset  {
          max-width: 100%;
          height: auto;
        }

        p.pd-reset ,
        h1.pd-reset ,
        h2.pd-reset ,
        h3.pd-reset ,
        h4.pd-reset ,
        h5.pd-reset ,
        h6.pd-reset  {
          overflow-wrap: break-word;
        }

        ol.pd-reset ,
        ul.pd-reset  {
          list-style: none;
        }

        code.pd-reset ,
        kbd.pd-reset ,
        pre.pd-reset ,
        samp.pd-reset  {
          font-size: 1em;
        }

        button.pd-reset ,
        [type='button'].pd-reset ,
        [type='reset'].pd-reset ,
        [type='submit'].pd-reset  {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }

        button.pd-reset ,
        input.pd-reset ,
        optgroup.pd-reset ,
        select.pd-reset ,
        textarea.pd-reset  {
          color: inherit;
        }

        button.pd-reset ,
        select.pd-reset  {
          text-transform: none;
        }

        table.pd-reset  {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }

        input::placeholder.pd-reset ,
        textarea::placeholder.pd-reset  {
          opacity: 1;
          color: var(--global-color-placeholder, #9ca3af);
        }

        textarea.pd-reset  {
          resize: vertical;
        }

        summary.pd-reset  {
          display: list-item;
        }

        small.pd-reset  {
          font-size: 80%;
        }

        sub.pd-reset ,
        sup.pd-reset  {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub.pd-reset  {
          bottom: -0.25em;
        }

        sup.pd-reset  {
          top: -0.5em;
        }

        dialog.pd-reset  {
          padding: 0;
        }

        a.pd-reset  {
          color: inherit;
          text-decoration: inherit;
        }

        abbr:where([title]).pd-reset  {
          text-decoration: underline dotted;
        }

        b.pd-reset ,
        strong.pd-reset  {
          font-weight: bolder;
        }

        code.pd-reset ,
        kbd.pd-reset ,
        samp.pd-reset ,
        pre.pd-reset  {
          font-size: 1em;
          --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
          font-family: var(--global-font-mono, var(--font-mono-fallback));
        }

        input[type='text'].pd-reset ,
        input[type='email'].pd-reset ,
        input[type='search'].pd-reset ,
        input[type='password'].pd-reset  {
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        input[type='search'].pd-reset  {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        ::-webkit-search-decoration.pd-reset ,
        ::-webkit-search-cancel-button.pd-reset  {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button.pd-reset  {
          -webkit-appearance: button;
          font: inherit;
        }

        input[type='number']::-webkit-inner-spin-button.pd-reset ,
        input[type='number']::-webkit-outer-spin-button.pd-reset  {
          height: auto;
        }

        input[type='number'].pd-reset {
          -moz-appearance: textfield;
        }

        :-moz-ui-invalid.pd-reset  {
          box-shadow: none;
        }

        :-moz-focusring.pd-reset  {
          outline: auto;
        }
      }"
    `)
  })
})
