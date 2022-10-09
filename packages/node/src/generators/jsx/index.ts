import type { PandaContext } from '../../context'
import { generatePreactJsxFactory } from './preact-jsx'
import { generateReactJsxFactory } from './react-jsx'
import { generateJsxPattern } from './react-pattern'
import { generateSolidJsxFactory } from './solid-jsx'

const factoryMap = {
  react: generateReactJsxFactory,
  solid: generateSolidJsxFactory,
  preact: generatePreactJsxFactory,
}

export function generateJsxFactory(ctx: PandaContext) {
  return factoryMap[ctx.jsxFramework!](ctx)
}

const patternMap = {
  react: generateJsxPattern,
}

export function generateJsxPatterns(ctx: PandaContext) {
  return patternMap[ctx.jsxFramework!](ctx)
}