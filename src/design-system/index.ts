/**
 * Margin Resume Builder - Design System
 * Complete design system exports
 *
 * Usage:
 * import { colors, typography, spacing, buttonVariants, ... } from '@/design-system';
 */

// ═══════════════════════════════════════════════════════════════
// CORE DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════

export { colors, semanticColors, gradients } from './colors/colors';
export type { ColorToken, SemanticColorToken } from './colors/colors';

export {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyle,
} from './typography/typography';
export type { FontFamily, FontSize, FontWeight, TextStyle } from './typography/typography';

export { spacing, componentSpacing, gap, inset } from './spacing/spacing';
export type { Spacing, ComponentSpacing, Gap } from './spacing/spacing';

export { radius, componentRadius } from './radius/radius';
export type { Radius, ComponentRadius } from './radius/radius';

export { shadow, glowShadow, focusRing, componentShadow } from './shadows/shadows';
export type { Shadow, GlowShadow, FocusRing } from './shadows/shadows';

export {
  duration,
  easing,
  spring,
  fadeVariants,
  slideVariants,
  scaleVariants,
  transition,
  componentAnimations,
} from './animations/animations';
export type { Duration, Easing, Spring } from './animations/animations';

export {
  breakpoints,
  breakpointValues,
  container,
  containerPadding,
  columns,
  colSpan,
  gridGap,
  gridTemplates,
} from './grid/grid';
export type { Breakpoints, Container, Columns } from './grid/grid';

export {
  iconSize,
  iconStrokeWidth,
  iconContext,
  iconColor,
  iconProps,
  commonIcons,
} from './icons/icons';
export type { IconSize, IconContext } from './icons/icons';

// ═══════════════════════════════════════════════════════════════
// COMPONENT VARIANTS
// ═══════════════════════════════════════════════════════════════

export {
  buttonVariants,
  inputVariants,
  textareaVariants,
  cardVariants,
  badgeVariants,
  alertVariants,
  modalVariants,
  modalOverlayVariants,
  avatarVariants,
  skeletonVariants,
  emptyStateVariants,
  dividerVariants,
  tooltipVariants,
} from './components/variants';

export type {
  ButtonVariants,
  InputVariants,
  TextareaVariants,
  CardVariants,
  BadgeVariants,
  AlertVariants,
  ModalVariants,
  ModalOverlayVariants,
  AvatarVariants,
  SkeletonVariants,
  EmptyStateVariants,
  DividerVariants,
  TooltipVariants,
} from './components/variants';
