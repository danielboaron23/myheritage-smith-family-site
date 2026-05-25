---
version: alpha
name: MyHeritage
description: |
  MyHeritage design system (codename "MH design"; production package "kido") —
  colors, typography, elevation, spacing, and components for the family-history
  platform. Warm, trustworthy, emotionally meaningful. Supports four theme modes
  (Core / DNA / Health) via `@mh-core/ThemeProvider`. Source-of-truth CSS
  variables are exposed by kido as `--theme-color-*` (theme colors + ramp).
  Non-theme tokens (spacing, radius, typography, elevation) are consumed by kido
  components as JS constants and exposed in design.md by semantic key — bind
  them to whatever your project's stylesheet exports.

colors:
  # === Theme (Core — default) =====================
  # CSS: --theme-color-primary / --theme-color-primary-hover
  # (Disabled state binds to --theme-color-20 — there's no dedicated disabled var.)
  primary: "#F56932"                # Amber100 — primary CTA, brand moments
  primary-hover: "#FF7C55"          # Amber80 — LIGHTENS on hover
  primary-active: "#DB510B"         # Amber140 — pressed
  primary-disabled: "#FFD1C3"       # Amber20 (--theme-color-20)
  primary-on: "#FFFFFF"             # foreground on primary
  secondary: "#283F66"              # Navy100 — deep structural chrome ONLY (not for accents/CTAs)
  secondary-hover: "#162D59"        # Navy120 — structural chrome hover

  # === Foreground (text + icons) ==================
  # Not exposed as CSS vars in kido; bind to whatever fg-* tokens your stylesheet
  # provides, or use the resolved hex values directly.
  fg-100: "#000000"                 # body text, headings, high-emphasis icons
  fg-80: "#333333"                  # secondary text
  fg-60: "#595959"                  # placeholder, supporting labels
  fg-40: "#999999"                  # disabled text, decorative
  fg-on-color: "#FFFFFF"            # text/icons on a colored fill

  # === Background / surfaces ======================
  bg-page: "#F7F7F7"                # page / canvas background
  bg-surface: "#FFFFFF"             # card, panel, modal background
  bg-subtle: "#F3F5F7"              # alternating rows, section dividers (Navy03)
  bg-hover: "#F2F2F2"               # hovered row / inline fill (Black05)

  # === Borders ====================================
  border: "#E5E5E5"                 # default 1px hairline (Black10)
  border-strong: "#CCCCCC"          # strong border (Black20)

  # === Links ======================================
  link: "#E65F19"                   # slightly redder than primary so links anchor to text
  link-hover: "#C13A17"             # Amber160

  # === Semantic ===================================
  success: "#35AC5D"                # Forest140
  success-strong: "#318648"         # Forest180 — text on tinted success surfaces
  success-surface: "#E2FAE6"        # Forest05
  warning: "#F7AA66"                # Apricot100
  warning-strong: "#CA6E34"         # Apricot160
  warning-surface: "#FFF1E6"        # Apricot05
  error: "#EF4232"                  # Scarlet100
  error-strong: "#B71914"           # Scarlet160
  error-surface: "#FEE8E8"          # Scarlet05
  info: "#0086E3"                   # Azure100
  info-surface: "#E0F5FD"           # Azure05

  # === Greyscale ==================================
  grey-50: "#F7F7F7"
  grey-100: "#F2F2F2"
  grey-200: "#E5E5E5"
  grey-300: "#CCCCCC"
  grey-400: "#999999"
  grey-500: "#595959"
  grey-600: "#333333"
  grey-700: "#283F66"               # Navy folded into the high-end
  grey-800: "#162D59"
  grey-900: "#000000"

  # === Product accents ===========================
  # Resolved hex; the active theme's accent is also reachable via --theme-color-primary.
  dna: "#BB4ECE"                    # Fuchsia100 — DNA product theme (purple family)
  health: "#0CA3C6"                 # Sapphire100 — Health product theme (blue family)

  # === Demographic markers (family-tree) =========
  male: "#17B4CE"                   # Sapphire80
  female: "#FC8181"                 # Scarlet60

  # === Highlight ==================================
  highlight: "#FDFF3266"            # yellow @ 40% alpha — text/match highlight

  # === Social brand colors ========================
  social-facebook: "#4266B2"
  social-twitter: "#00ACED"
  social-whatsapp: "#49CF77"
  social-google: "#4285F4"          # used for the multicolor logo, not the bg

  # === Theme primaries (Product axis) =============
  # SOURCE: kido Storybook bundle. Canonical CSS variable is --theme-color-primary
  # (and --theme-color-primary-hover). Each theme also exposes the full ramp
  # --theme-color-{3,5,10,20,40,60,80,100,120,140,160,180}.
  # 3 themes: Core (default) / DNA / Health. Switch via @mh-core/ThemeProvider.
  # All three lighten on hover (100 → 80).
  theme-primary-core: "#F56932"     # Amber (orange family) — default
  theme-primary-core-hover: "#FF7C55"
  theme-primary-dna: "#BB4ECE"      # Fuchsia (purple family)
  theme-primary-dna-hover: "#C663DB"
  theme-primary-health: "#0CA3C6"   # Sapphire (blue family)
  theme-primary-health-hover: "#17B4CE"

typography:
  # font-family: Helvetica Neue (project substitutes Inter from Google Fonts until
  # webfont is provided — keep the family on the literal token, not in a binding)

  # ---- Display / hero (Bold by default) ----------
  t1-display:
    fontFamily: Helvetica Neue
    fontSize: 100px
    lineHeight: 110px
    fontWeight: 700
  t1:                               # page hero — pair with <h1>
    fontFamily: Helvetica Neue
    fontSize: 58px
    lineHeight: 62px
    fontWeight: 700
  t2:                               # section hero
    fontFamily: Helvetica Neue
    fontSize: 48px
    lineHeight: 52px
    fontWeight: 700
  t3:                               # sub-section
    fontFamily: Helvetica Neue
    fontSize: 40px
    lineHeight: 44px
    fontWeight: 700

  # ---- Product headings (Regular default, +Medium +Bold modifiers) ----
  t4:                               # card title — semantic <h1> at product level
    fontFamily: Helvetica Neue
    fontSize: 34px
    lineHeight: 40px
    fontWeight: 400
    letterSpacing: 0
  t5:                               # component title — <h2>
    fontFamily: Helvetica Neue
    fontSize: 28px
    lineHeight: 34px
    fontWeight: 400
    letterSpacing: 0.2px
  t6:                               # small section — <h3>
    fontFamily: Helvetica Neue
    fontSize: 22px
    lineHeight: 28px
    fontWeight: 400
    letterSpacing: 0.3px
  t7:                               # label-size title — <h4>
    fontFamily: Helvetica Neue
    fontSize: 18px
    lineHeight: 24px
    fontWeight: 400
    letterSpacing: 0.3px
  t8:                               # smallest title — <h4>/<h5>
    fontFamily: Helvetica Neue
    fontSize: 15px
    lineHeight: 20px
    fontWeight: 400
    letterSpacing: 0.3px

  # ---- Body ------------------------------------
  p1:                               # large body, article intros
    fontFamily: Helvetica Neue
    fontSize: 18px
    lineHeight: 28px
    fontWeight: 400
    letterSpacing: 0.3px
  p2:                               # **DEFAULT BODY**
    fontFamily: Helvetica Neue
    fontSize: 15px
    lineHeight: 24px
    fontWeight: 400
    letterSpacing: 0.3px
  p3:                               # secondary / dense body
    fontFamily: Helvetica Neue
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 400
    letterSpacing: 0.3px
  meta:                             # captions, micro labels
    fontFamily: Helvetica Neue
    fontSize: 11px
    lineHeight: 11px                # 100% (line-height equals font-size)
    fontWeight: 400
    letterSpacing: 0.4px

  # ---- Caps / overlines ------------------------
  caps1:
    fontFamily: Helvetica Neue
    fontSize: 15px
    lineHeight: 15px
    fontWeight: 500
    letterSpacing: 0.9px
    textTransform: uppercase
  caps2:
    fontFamily: Helvetica Neue
    fontSize: 13px
    lineHeight: 13px
    fontWeight: 500
    letterSpacing: 1.4px
    textTransform: uppercase
  caps3:
    fontFamily: Helvetica Neue
    fontSize: 11px
    lineHeight: 11px
    fontWeight: 500
    letterSpacing: 1.2px
    textTransform: uppercase
  caps4:
    fontFamily: Helvetica Neue
    fontSize: 9px
    lineHeight: 9px
    fontWeight: 700
    letterSpacing: 1px
    textTransform: uppercase

elevation:
  depth-01:                         # subtle inset / button hover (rare)
    shadow: "0 0 4px 0 rgba(0,0,0,0.10)"
  depth-02:                         # cards (default resting) — alias: shadow-card
    shadow: "0 2px 8px 0 rgba(0,0,0,0.05)"
  depth-03:                         # popups, dropdowns, tooltips, card-hover — aliases: shadow-card-hover, shadow-popover
    shadow: "0 2px 8px 0 rgba(0,0,0,0.10), 0 0 1px 0 rgba(0,0,0,0.20)"
  depth-04:                         # floating action elements (FAB)
    shadow: "0 10px 20px 0 rgba(0,0,0,0.05)"
  depth-05:                         # modals, large popovers — alias: shadow-modal
    shadow: "0 2px 20px 0 rgba(0,0,0,0.10)"
  depth-06:                         # side modals, drawers, sheets
    shadow: "0 20px 40px 0 rgba(0,0,0,0.10)"
  depth-07:                         # strong emphasis — full-screen lifted
    shadow: "0 2px 8px 0 rgba(0,0,0,0.30)"

  # Semantic aliases (prefer these in product code)
  shadow-card: "{elevation.depth-02}"
  shadow-card-hover: "{elevation.depth-03}"
  shadow-popover: "{elevation.depth-03}"
  shadow-modal: "{elevation.depth-05}"
  focus-ring: "0 0 0 2px rgba(245,105,50,0.40), inset 0 0 0 1px #F56932"

rounded:
  # Scale: R0/R1/R3/R4/R5/R6/R7/Full (no R2 in the system).
  r0: 0px                           # square
  r1: 2px                           # slight rounding
  r3: 4px                           # cards, panels
  r4: 6px                           # buttons, inputs — DEFAULT
  r5: 8px                           # larger components
  r6: 16px                          # chips, tags, **MODALS**
  r7: 24px                          # sheets, drawers
  full: 999px                       # pills, avatars

spacing:
  # Scale: S0 .. S16, source-of-truth from the Figma "Grid & Spacing" canvas.
  # ⚠ Earlier SKILL.md showed s11=80, s12=96, s13=120, s14=144, s15=168 — Figma
  # disagrees on s11..s15. Figma values used here.
  s0: 0px
  s1: 4px                           # icon gap, micro nudge
  s2: 8px                           # compact inline spacing
  s3: 12px                          # dense UI padding
  s4: 16px                          # DEFAULT padding
  s5: 24px                          # comfortable gap
  s6: 32px                          # spacious padding
  s7: 40px                          # section gap
  s8: 48px                          # large section spacing
  s9: 56px
  s10: 64px
  s11: 72px                         # (Figma) — was 80 in SKILL.md
  s12: 80px                         # (Figma) — was 96 in SKILL.md
  s13: 96px                         # (Figma) — was 120 in SKILL.md
  s14: 120px                        # (Figma) — was 144 in SKILL.md
  s15: 160px                        # (Figma) — was 168 in SKILL.md
  s16: 200px                        # hero / full-bleed

breakpoints:
  # From the "Grid & Spacing" canvas in the Styles file. These are the device frames
  # the design system explicitly draws against; the typography library exposes them
  # as `screen/breakpoint/mobileMax · tabletMin · tabletMax · desktopMin` variables.
  mobile: 375px                     # iPhone-class
  tablet-portrait: 768px            # iPad-class portrait
  tablet-landscape: 1024px          # iPad-class landscape
  desktop: 1680px                   # Standard desktop reference frame

motion:
  ease-standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  duration-fast: 180ms
  duration-default: 220ms
  duration-slow: 240ms

components:
  # ============================================
  # BUTTONS — verified from Components file (0rQ1tceUHfyZrovd0IHV3T → 0:767).
  # Buttons are a 5-axis component: Product × Hierarchy × Icon × Size × State.
  # All buttons share radius 100px (PILL — literal value, NOT a radius token).
  # ============================================

  # Base shape (applies to every variant)
  button:
    borderRadius: 100px               # pill — hardcoded in Figma, not bound to a token
    fontFamily: Helvetica Neue
    fontWeight: 400                   # Regular by default; Bold modifiers exist on labels
    letterSpacing: 0.3px

  # Size axis — height + padding + text style
  button-large:
    height: 52px
    paddingX: "{spacing.s7}"          # 40
    paddingY: "{spacing.s3}"          # 12
    fontStyle: "{typography.t6}"      # 22 / 28
  button-medium:
    height: 40px
    paddingX: "{spacing.s6}"          # 32
    paddingY: "{spacing.s2}"          # 8
    fontStyle: "{typography.t7}"      # 18 / 24
  button-small:
    height: 32px
    paddingX: "{spacing.s5}"          # 24
    paddingY: "{spacing.s1}"          # 4
    fontStyle: "{typography.p2}"      # 15 / 24
  button-xsmall:
    height: 28px
    paddingX: "{spacing.s4}"          # 16
    paddingY: "{spacing.s1}"          # 4
    fontStyle: "{typography.p3}"      # 13 / 20

  # Hierarchy axis — bg/border/text treatment (compose on top of a size variant)
  button-primary:
    backgroundColor: "{colors.primary}"     # bound to --theme-primary
    textColor: "{colors.fg-on-color}"       # white
    borderWidth: 0
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.fg-on-color}"
  button-secondary:                          # "ghost" — transparent + colored border + colored text
    backgroundColor: transparent
    textColor: "{colors.primary}"            # --theme-primary
    borderColor: "{colors.primary}"
    borderWidth: 1px
  button-tertiary:                           # text-only with full button padding (NOT a Link)
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderWidth: 0
  button-destructive:                        # convention: tertiary visual treatment + error color
    backgroundColor: transparent
    textColor: "{colors.error}"
    borderWidth: 0

  # Link — separate component, NOT a button hierarchy. No background, no padding box;
  # it's a flex container of (optional start icon) + label + (optional end icon).
  link:
    fontStyle: "{typography.p1}"            # at Large: 18 / 28. Medium/Small variants exist.
    textColor: "{colors.primary}"
    gap: "{spacing.s1}"                     # 4px between icon and text
    iconSize: 12px                          # default chevron / arrow / edit icon

  # Icon Button — separate component with Shape/Type/Size axes
  icon-button-medium:
    size: 40px                              # 40 × 40
    iconSize: 20px
    iconColor: "{colors.fg-60}"             # default (GrayIcon Type)
    # State variants: bg tints on Hover; Disabled greys out icon
    # Shape variants: Transparent (no bg/border), Circle (rounded full), Square (rounded r4)
    # Type variants: GrayIcon (fg-60), ColoredIcon (primary), Outline (1px border around icon)

  # Social sign-in button — fixed dimensions, brand-spec colors
  social-button:
    width: 300px
    height: 34px
    borderRadius: 20px                      # smaller pill than regular buttons (NOT 100px)
    fontStyle: "{typography.p3}"            # P3 Medium 13/20
    fontWeight: 500
    iconSize: 20px
    iconOffset: 10px                        # icon offset from left edge
  social-button-facebook:
    backgroundColor: "{colors.social-facebook}"
    textColor: "{colors.fg-on-color}"
  social-button-twitter:
    backgroundColor: "{colors.social-twitter}"
    textColor: "{colors.fg-on-color}"
  social-button-whatsapp:
    backgroundColor: "{colors.social-whatsapp}"
    textColor: "{colors.fg-on-color}"
  social-button-google:
    backgroundColor: "{colors.bg-surface}"  # white
    borderColor: "{colors.border}"          # 1px Black10
    borderWidth: 1px
    textColor: "#3F4245"                    # custom near-black, NOT a token
    fontFamily: Product Sans                # Google brand-required — DO NOT substitute
  social-button-apple:
    backgroundColor: "{colors.bg-surface}"
    borderColor: "{colors.border}"
    borderWidth: 1px
    textColor: "{colors.fg-60}"             # Black60
    fontFamily: Helvetica Neue

  # Button Group (segmented control)
  button-group:
    width: 320px
    height: 40px
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r4}"            # 6px — NOT a pill
    shadow: "{elevation.depth-04}"
    segmentPadding: "{spacing.s3}"
    segmentGap: "{spacing.s2}"              # icon-to-text gap within a segment
    segmentTextStyle: "{typography.p2}"
    separatorWidth: 1px
  button-group-segment-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.fg-on-color}"
  button-group-segment-default:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.fg-60}"

  # Button Group Vertical (zoom-style stacked plus/minus)
  button-group-vertical:
    width: 32px
    height: 63px
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r3}"
    shadow: "0 10px 10px 0 rgba(0,0,0,0.05)"   # soft drop-shadow variant
    iconSize: 12px
    iconOpacity: 0.65
    separatorColor: "{colors.border}"
    separatorWidth: 1px
    separatorHeight: 22px

  # Button Group Collapsed (single-row dropdown trigger)
  button-group-collapsed:
    width: 345px
    height: 40px
    backgroundColor: transparent
    borderColor: "{colors.border-strong}"
    borderWidth: 1px
    borderRadius: 30px                       # fixed value, NOT a radius token
    paddingX: "{spacing.s4}"
    paddingY: "{spacing.s2}"
    fontStyle: "{typography.p2}"
    textColor: "{colors.fg-60}"
    iconSize: 12px
    iconOffset: 15px                         # chevron offset from right edge

  # Action Trigger — text+icon chip-ish affordance (not a button, not a link)
  action-trigger-medium:
    paddingX: "{spacing.s3}"
    paddingY: "{spacing.s2}"
    borderRadius: "{rounded.r3}"             # squared, NOT a pill
    gap: "{spacing.s2}"
    iconSize: 20px
    fontStyle: "{typography.t7}"             # Title7 Medium (18/24 @ weight 500)
    fontWeight: 500
  action-trigger-gray:
    textColor: "#333333"                     # --element80 alias of fg-80
  action-trigger-themed:
    textColor: "{colors.primary}"
  action-trigger-white:
    textColor: "{colors.fg-on-color}"
    # used on dark/photographic surfaces

  # Switch Toggle (on/off)
  switch-toggle-medium:
    width: 30px
    height: 18px
    trackWidth: 30px
    trackHeight: 14px
    trackRadius: "{rounded.full}"
    thumbSize: 18px
    thumbColor: "{colors.bg-surface}"
    thumbShadow: "{elevation.depth-01}"
  switch-toggle-on:
    trackColor: "{colors.primary}"           # Amber100 / Theme Primary
  switch-toggle-off:
    trackColor: "#CCCCCC"                    # Black20

  # Button Toggle — single toggleable button (standalone)
  button-toggle:
    width: 86px
    height: 40px
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r4}"             # r4 default; r-full when Rounded=Yes
    shadow: "{elevation.depth-04}"           # null when Style=Flat
    padding: "{spacing.s3}"
    gap: "{spacing.s2}"
    iconSize: 20px
    fontStyle: "{typography.p2}"
  button-toggle-selected-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.fg-on-color}"
  button-toggle-selected-secondary:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.primary}"

  # === Header (Accessibility-check vFio63yA5SoKNqsZ4SBecg → 2233:37534) ===
  # MANDATORY companion to the Footer on every full-screen design.
  # Two stacked bars: utility strip (top, 36 px) + main nav bar (40 px).
  # Maps to kido `Business/Navigation/SimpleHeader` (the simple variant) and the
  # canonical "Header" component_set in the Components library. Has a paired
  # `Header Auth` for the logged-out state.
  header:
    width: 100%                                # spans viewport
    totalHeight: 76px                          # 36 (utility) + 40 (main bar)
    backgroundColor: "{colors.bg-surface}"     # white
    # The two bars share a hairline divider; design doesn't theme by data-theme.
  header-utility-strip:                        # top: 36 px tall
    height: 36px
    paddingTopBottom: 8px
    rightAlignedItemsGap: 16px                 # between Help / Language / Premium CTA
    textStyle: "{typography.meta}"             # 11 px — small chrome text
    textColor: "{colors.fg-60}"
    iconSize: 20px                             # Small icons (Question / Globe / etc.)
    dropdownChevronSize: 12px                  # XSmall - ArrowLineDown
    items:
      - "Help dropdown (Question icon + label + chevron)"
      - "Language picker (Globe icon + locale label)"
      - "Go PremiumPlus CTA (hidden by default; shown for free users)"
      - "Secondary nav row (Help links)"
  header-main-bar:                             # 40 px tall — primary nav
    height: 40px
    background: "{colors.bg-surface}"          # white
    leftZone:                                  # logo + match counters
      width: ~362px
      logoOffset: "12 px left, 11 px top"
      logoWidth: 82px
      logoHeight: 18px
      matchCounterIconSize: 26px               # 26 × 26 inline icons in nav list
      matchCounterBadgePadding: "3 × 6 px"
      matchCounterBadgeStyle: "{typography.meta}"  # 11 px count text
    rightZone:                                 # account + notifications + help + language
      width: ~485px
      separator: "1 px vertical border between groups"
      profileAvatarSize: 32px                  # circular
      profileNameStyle: "{typography.p3}"      # 13 / 18
      profileNameMaxWidth: 100px               # truncate beyond
      profileDropdownChevron: "11 × 7 px"
      inboxLinkIconSize: 18px
      invitationsIconSize: 25px
      invitationsBadgeSize: 16px               # circle badge
  # Header variants observed in the kido inventory:
  #   - Header (canonical signed-in) — described above
  #   - Header Auth (signed-out / pre-auth) — login + signup CTAs, no profile
  # Plus a related Business/Navigation/SimpleHeader for in-product chrome.
  
  footer:
    backgroundColor: "{colors.bg-surface}"          # white
    shadow: "{elevation.depth-02}"                  # subtle top boundary
    textStyle: "{typography.p3}"                    # 13/20 default
    textColor: "{colors.fg-60}"                     # Black60 nav items
    headerStyle: "{typography.t7}"                  # 18/24 column headers in Full
    headerColor: "{colors.fg-100}"                  # Black100
    dividerColor: "{colors.border-strong}"          # Black20 separators
    columnGap: "{spacing.s10}"                      # 64px between nav columns (Full desktop)
    sectionPadding: "{spacing.s5}"                  # 24px internal padding
  footer-full:                                       # Marketing / homepage / landing
    desktopHeight: 308px
    desktopWidth: 1420px
    mobileHeight: 298px
    mobileWidth: 320px
  footer-lean:                                       # Second-tier marketing
    desktopHeight: 60px
    desktopWidth: 1420px
    # No mobile equivalent — fallback to footer-default on mobile
  footer-default:                                    # In-product app screens
    desktopHeight: 60px
    desktopWidth: 1420px
    mobileHeight: 149px
    mobileWidth: 320px
  footer-basic:                                      # Help / contact / error pages
    desktopHeight: 60px
    desktopWidth: 1420px
    mobileHeight: 110px
    mobileWidth: 320px

  # Icon Button — Shape variants
  icon-button-large-circle:
    size: 48px                               # uses --s8
    iconSize: 20px
    iconColor: "{colors.fg-60}"
    borderRadius: 100px                      # becomes circle at 48x48
    borderColor: "rgba(0,0,0,0.2)"           # Black @ 20% alpha
    borderWidth: 1px                          # for Type=Outline
  icon-button-square:
    borderRadius: "{rounded.r4}"             # 6px
    # same border/icon as Circle
  icon-button-type-grayicon:
    iconColor: "{colors.fg-60}"
  icon-button-type-coloredicon:
    iconColor: "{colors.primary}"
  icon-button-type-outline:
    borderWidth: 1px
    borderColor: "rgba(0,0,0,0.2)"
  card:                                        # base card — DEPRECATED alias; use card-default
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r3}"
    padding: "{spacing.s5}"
    shadow: "{elevation.shadow-card}"
  card-hover:
    shadow: "{elevation.shadow-card-hover}"
  card-with-border:
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r3}"
    borderColor: "{colors.border}"
    padding: "{spacing.s5}"
    # NB: use border OR shadow, never both

  # === CardLayout (Components 1342:26339) ===
  # Maps to kido `Core/Cards/Card` + `@mh-business/Layouts/Cards/CardCallToAction` /
  # `CardCallToActionList`. The composite card pattern with 5 variant flavors.
  # Variant axes: Variant × Direction (Horizontal / Vertical) × Position (Left / Right / Top).
  card-layout-shared:
    background: "{colors.bg-surface}"          # white
    borderRadius: "{rounded.r4}"               # 6 px — consistent across all variants
    visualSlotWidth: 175px                     # default horizontal visual slot
    visualPlaceholderBg: "{colors.surface}"    # Element03 #F7F7F7 tint
    closeIconSize: 20px                        # close X (when present)
    closeIconOffset: "right 12px, top 12px"
  card-default-horizontal-right:               # canonical desktop card
    width: 550px
    height: 188px
    padding: "{spacing.s5}"                    # 24
    contentGap: "{spacing.s5}"                 # 24 between content column and visual
    shadow: "{elevation.shadow-card}"          # Depth02
    titleStyle: "{typography.t6}"              # Title6 Bold (22/28)
    titleWeight: 700
    titleHelpIconSize: 28px                    # optional inline IconButton beside title
    bodyStyle: "{typography.p2}"               # 15/24
    bodyColor: "{colors.fg-60}"
    visualWidth: 175px                         # fills card height
    actionButtonStyle: "button-large"          # 2 buttons: outline + filled primary, pill
    hasCloseX: true
  card-default-vertical-top:
    width: 350px
    height: 488px
    padding: "{spacing.s7}"                    # 40
    contentGap: "{spacing.s6}"                 # 32
    shadow: "{elevation.shadow-card}"
    titleStyle: "{typography.t6}"
    bodyStyle: "{typography.p2}"
    visualPosition: top                         # full-width image area at top
    visualPlaceholderHeight: "auto"            # adjusted by content
  card-mobile:                                 # mobile-tuned card — softer shadow, tighter padding
    width: "100%"
    height: 140px
    padding: "{spacing.s4}"                    # 16
    shadow: "0 2px 10px 0 rgba(0,0,0,0.10)"    # softer than Depth02 — mobile-specific
    titleStyle: "{typography.t7}"              # 18/24, can mix bold + regular on one line
    bodyStyle: "{typography.p2}"
    bottomRowIconSize: 20px                    # e.g. Location icon + bottom text
    hasCloseX: false
  card-with-separators:                        # 3-section card (Header / Content / Footer)
    width: 562px
    height: 303px
    shadow: "{elevation.shadow-card}"          # Depth02
    sectionSeparatorColor: "{colors.border}"   # Black10 1px hairlines between sections
    headerPadding: "16px top, 24px left, 40px right (close X room)"
    headerTitleStyle: "{typography.t6}"
    headerTitleWeight: 700
    contentPadding: "{spacing.s5}"             # 24 all sides
    contentTextWidth: 310px
    contentVisualHeight: 98px
    footerHeight: 82px
    footerPadding: "{spacing.s5}"
    footerActionsGap: 16px
    hasCloseX: true
  card-lean:                                   # lighter card — text-only action, no buttons
    width: 561px
    height: 156px
    padding: "{spacing.s5}"                    # 24
    shadow: "{elevation.shadow-card}"          # Depth02
    actionStyle: "text-link"                   # inline P2 in theme primary, no button
    hasCloseX: false
  card-advanced:                               # data-dense card (genealogy match cards)
    width: 561px
    height: 184px
    paddingX: "{spacing.s5}"                   # 24
    paddingY: "{spacing.s4}"                   # 16
    contentGap: "{spacing.s10}"                # 64 between text columns and visual cluster
    shadow: "{elevation.shadow-popover}"       # Depth03 (custom dual: 0.5 px hairline + 4 px blur)
    titleStyle: "{typography.p1}"              # P1 Bold (18/28)
    titleWeight: 700
    titleColor: "{colors.fg-100}"              # Black100
    subtitleStyle: "{typography.p3}"           # 13/20
    subtitleColor: "{colors.fg-60}"
    subtitleIconSize: 20px
    labelStyle: "{typography.p3}"
    labelColor: "{colors.fg-60}"
    valueStyle: "{typography.p3}"
    valueColor: "{colors.fg-100}"
    labelColumnsGap: "{spacing.s4}"            # 16 between Labels and Values
    rowGap: "{spacing.s1}"                     # 4 between rows
    visualClusterSize: "96 × 96"                # circular profile photo OR record image
    visualBorderRadius: "full (profile) or r4 (record)"
    optionalNewTag: "caps4 (9 px), Black10 bg, 2 px radius"
  # === Text Field (verified from UI_Kit 2726:136611, kido: @mh-core/Inputs/TextField + Core/Inputs/StyledTextField) ===
  # Three style families share the same 8-state matrix and floating-label behavior:
  #   Line (underline only) · Box-Medium · Box-Large
  # Common: floating label that shrinks from p2 in-input to meta above the border on focus/fill.
  textfield-shared:
    labelColorRest: "{colors.fg-60}"        # Black60 — label in placeholder position
    labelColorFloated: "{colors.fg-80}"     # Black80 — label after float (and focused)
    labelStyleRest: "{typography.p2}"        # 15 / 24
    labelStyleFloated: "{typography.meta}"  # 11 / 100% — shrinks on float
    inputStyle: "{typography.p2}"            # 15 / 24
    inputColor: "{colors.fg-80}"             # Black80 — typed text
    inputWeight: 500                         # P2 Medium when filled (defaults to Regular when empty)
    inputVerticalAlign: center               # input text is vertically CENTERED in the field; never bottom-aligned
    helperStyle: "{typography.meta}"        # helper / hint text
    helperColor: "{colors.fg-60}"
    errorStyle: "{typography.p3}"            # 13 / 20
    errorColor: "{colors.error}"             # #EF4232
    typingCursor: "{colors.fg-80}"          # 1px × 14px caret in Black80
    trailingIconHit: 28px                   # icon button hit target
    trailingIconSize: 20px

  textfield-line:                            # underline-only style — most compact
    height: 48px                             # 48 base; 71 with error msg shown
    borderTop: 0
    borderBottom: 1px                        # at top:47 (between input and helper)
    borderColor: "{colors.border-strong}"    # Black20 default
    borderColorFocus: "{colors.fg-60}"       # Black60 — darker on focus/fill
    borderColorError: "{colors.error}"
    inputPaddingX: 0
    inputBlockHeight: 24px                   # text row
    inputBlockTop: 22px                      # baseline offset

  textfield-box-medium:                      # 40 px input wrapper
    height: 47px                             # 40 input + 6 label float reserve + 1 border
    inputHeight: 40px
    borderRadius: "{rounded.r3}"             # 4 px
    borderColor: "{colors.border-strong}"
    borderColorFocus: "{colors.fg-60}"
    borderColorError: "{colors.error}"
    background: "{colors.bg-surface}"
    inputPaddingX: 13px                      # text starts 13 px from left edge
    labelLeft: 15px                          # floating label anchor

  textfield-box-large:                       # 50 px input wrapper
    height: 56px                             # 50 input + 6 label float reserve
    inputHeight: 50px
    borderRadius: "{rounded.r3}"
    borderColor: "{colors.border-strong}"
    borderColorFocus: "{colors.fg-60}"
    borderColorError: "{colors.error}"
    background: "{colors.bg-surface}"
    inputPaddingX: 13px
    labelLeft: 15px

  # State overrides (apply on top of any size)
  textfield-default:
    borderColor: "{colors.border-strong}"    # Black20
    labelColor: "{colors.fg-60}"
  textfield-hover:
    borderColor: "{colors.fg-60}"            # darker hairline on hover (Black60)
  textfield-focus:                           # focused, empty
    borderColor: "{colors.fg-60}"
    labelStyle: "{typography.meta}"          # label floats up + shrinks
    labelColor: "{colors.fg-80}"
  textfield-focus-filled:                    # focused with content
    borderColor: "{colors.fg-60}"
    labelStyle: "{typography.meta}"
    labelColor: "{colors.fg-80}"
    showTypingCursor: true
  textfield-filled:                          # filled, blurred
    borderColor: "{colors.border-strong}"
    labelStyle: "{typography.meta}"
    labelColor: "{colors.fg-80}"
  textfield-filled-icon-hover:               # filled, trailing icon hovered
    # Same as filled but trailing icon-button shows its hover bg
    iconBackgroundOnHover: "{colors.bg-hover}"
  textfield-error:                           # error, possibly with input text
    borderColor: "{colors.error}"
    showErrorText: true                      # 13 / 20 P3 in error red below input
  textfield-error-required:                  # required-field empty error
    borderColor: "{colors.error}"
    showErrorText: true                      # "Required" message

  # Legacy generic 'input' alias — DEPRECATED, prefer the textfield-* tokens
  input:
    backgroundColor: "{colors.bg-surface}"
    borderColor: "{colors.border-strong}"
    borderRadius: "{rounded.r3}"             # 4 px (Box variants); Line has no radius
    textColor: "{colors.fg-80}"
    paddingX: 13px
    paddingY: 0

  # === Text Field — additional canonical states (Components 237:783) ===
  textfield-disabled:
    borderColor: "{colors.border}"            # Black10 (subtler than Black20)
    inputColor: "{colors.fg-40}"              # disabled text fades to Black40
    labelColor: "{colors.fg-40}"
    background: "{colors.bg-page}"            # may use page bg to signal non-interactive
    cursor: not-allowed
  textfield-helper-text:                       # default + helper text shown
    helperColor: "{colors.fg-60}"
    helperStyle: "{typography.p3}"            # P3 (13/20) for helper messages

  # === Text Field — Select Person variant ===
  textfield-box-select-person:                # Box Large + leading person icon
    inherit: textfield-box-large
    leadingIconSize: 28px                     # icon-button hit target
    leadingIconInnerSize: 20px                # actual icon
    leadingIconOffset: 13px                   # offset from left edge
    # Used in genealogy flows ("select an existing person from your tree")

  # === Textbox / Textarea (Components 243:15232) ===
  textbox-line:
    height: 71px                              # 48 input area + 23 helper slot
    border: 0
    borderBottom: 1px
    borderColor: "{colors.border-strong}"     # Black20 default
    borderColorFocus: "{colors.fg-60}"
    borderColorError: "{colors.error}"
    inputStyle: "{typography.p2}"
    labelStyle: "{typography.p2}"             # P2 in-input; shrinks to Meta on float
  textbox-box:                                 # default textarea
    height: 80px
    background: "{colors.bg-surface}"
    border: 1px
    borderColor: "{colors.border-strong}"
    borderColorFocus: "{colors.fg-60}"
    borderColorError: "{colors.error}"
    borderRadius: "{rounded.r3}"
    inputStyle: "{typography.p2}"
    counterStyle: "{typography.p3}"           # "0/200" counter in P3 Black40 bottom-right
    counterColor: "{colors.fg-40}"

  # === Dropdown (Components 243:15267) ===
  # Visually identical to Text Field but with trailing chevron and no caret on focus.
  dropdown-line:
    height: 48px
    border: 0
    borderBottom: 1px
    borderColor: "{colors.border-strong}"
    chevronSize: 12px
    chevronColor: "{colors.fg-60}"
    chevronOffset: 15px                       # from right edge
  dropdown-box-medium:
    height: 47px                              # 40 input + 6 label float reserve
    inputHeight: 40px
    background: "{colors.bg-surface}"
    border: 1px
    borderColor: "{colors.border-strong}"
    borderRadius: "{rounded.r3}"
    chevronSize: 12px
    chevronOffset: 15px
  dropdown-box-large:
    height: 56px
    inputHeight: 50px
    background: "{colors.bg-surface}"
    border: 1px
    borderColor: "{colors.border-strong}"
    borderRadius: "{rounded.r3}"
    chevronSize: 12px
    chevronOffset: 15px
  # Dropdown states match Text Field: Default · Hover · Focus · Filled · Disabled · Error · Error_RequiredField
  # (no FocusFilled / Filled_IconHover — only one stateful action: select).

  # === Checkbox (Components 243:15268) ===
  checkbox-medium:
    containerHeight: 32px                     # 70 × 32 (with label)
    containerGap: "{spacing.s2}"              # 8 px between box and label
    containerPaddingY: "{spacing.s1}"         # 4 px
    containerPaddingRight: "{spacing.s2}"
    boxSize: 16px
    boxBorderRadius: 2px                      # not r1 — literal 2 px
    boxBorder: 1px
    boxBorderColor: "{colors.fg-40}"          # Black40
    boxBackground: "{colors.bg-surface}"
    labelStyle: "{typography.p2}"
    labelColor: "{colors.fg-60}"
  checkbox-small:
    containerHeight: 28px                     # 65 × 28
    boxSize: 14px                             # ≈ 16 × (28/32)
    # rest inherits from medium
  checkbox-state-selected:
    boxBackground: "{colors.primary}"          # Amber100 fill on select
    boxBorderColor: "{colors.primary}"
    checkIconSize: 12px                       # white check overlay
    checkIconColor: "{colors.fg-on-color}"
  checkbox-state-hover:
    boxBorderColor: "{colors.fg-60}"          # darken on hover
  checkbox-state-selected-hover:
    boxBackground: "{colors.primary-hover}"   # lighten the fill on hover
  checkbox-state-partial:
    boxBackground: "{colors.primary}"
    indicatorIcon: "minus"                    # dash instead of check
  checkbox-state-error:
    boxBorderColor: "{colors.error}"
  checkbox-state-disabled:
    boxBorderColor: "{colors.fg-40}"
    boxBackground: "{colors.bg-page}"
    labelColor: "{colors.fg-40}"

  # === Radio Button (Components 243:15269) ===
  radio-medium:
    containerHeight: 32px                     # 70 × 32
    containerGap: "{spacing.s2}"
    containerPaddingY: "{spacing.s1}"
    boxSize: 16px                             # circle (border-radius full)
    boxBorder: 1px
    boxBorderColor: "{colors.fg-40}"
    boxBackground: "{colors.bg-surface}"
    labelStyle: "{typography.p2}"
    labelColor: "{colors.fg-60}"
  radio-small:
    containerHeight: 28px                     # 66 × 28
    boxSize: 14px
  radio-state-selected:
    boxBorderColor: "{colors.primary}"        # Amber100 ring
    innerDotSize: 8px                          # inner solid dot
    innerDotColor: "{colors.primary}"
  radio-state-hover:
    boxBorderColor: "{colors.fg-60}"
  radio-state-selected-hover:
    boxBorderColor: "{colors.primary-hover}"
    innerDotColor: "{colors.primary-hover}"
  radio-state-error:
    boxBorderColor: "{colors.error}"
  radio-state-disabled:
    boxBorderColor: "{colors.fg-40}"
    labelColor: "{colors.fg-40}"

  # === DatePicker (Components 243:15270) ===
  # Composite component: 3 sub-fields (Day / Month / Year) with vertical separators.
  datepicker-box-large:
    height: 80px                              # 56 input + 24 helper/error slot
    inputHeight: 56px
    columnLayout: "Day(27%) Sep1 Month(36%) Sep2 Year(35%)"
    separatorWidth: 1px
    separatorColor: "rgba(0,0,0,0.2)"
    separatorHeight: 49px
    dayBorderRadius: "{rounded.r3}"
    yearBorderRadius: "{rounded.r3}"
    # Day and Year are text inputs; Month is a Dropdown with chevron.
    # Filled state: borders darken to Black60, label floats up to Meta size.
  datepicker-box-medium:
    height: 80px
    inputHeight: 47px
    # Same column layout as Box Large, scaled down
  datepicker-line:
    height: 80px
    inputHeight: 48px
    # No border boxes — only underline per sub-field
  # DatePicker states (9): Default · Hover · Day Focus · With Day · With Month · Year Focus · Full · Error · Helper Text
  # "Full" = all 3 sub-fields filled with partial-date input (e.g. "12 May 1970")

  # === Calendar widget (Components 2810:96922) ===
  calendar:
    width: 326px
    height: 316px
    background: "{colors.bg-surface}"
    borderRadius: "{rounded.r4}"              # 6 px
    shadow: "{elevation.shadow-popover}"      # Depth03
    paddingTop: "{spacing.s5}"                # 24
    paddingX: "{spacing.s6}"                  # 32
    paddingBottom: "{spacing.s6}"             # 32
    headerStyle: "{typography.t7}"            # P1 Bold actually — see prose
    headerColor: "{colors.fg-100}"
    daysOfWeekStyle: "{typography.p2}"
    daysOfWeekColor: "{colors.fg-40}"         # Black40 — subtle
    arrowIconSize: 20px
    columnGap: 39px                            # date-to-date horizontal spacing
    rowGap: 40px                               # week-to-week vertical spacing
  calendar-date-default:
    size: 24px
    textStyle: "{typography.p2}"
    textColor: "{colors.fg-100}"              # Black100 — in-month
  calendar-date-out-of-month:
    textColor: "{colors.border-strong}"       # Black20 (#CCC) — out-of-month dates
  calendar-date-today:
    background: "{colors.primary}"             # Amber100 ring or fill behind number
    textColor: "{colors.fg-100}"
    # Implementation uses a custom rendered calendar item shape
  calendar-date-selected:
    background: "{colors.primary}"             # Amber100 fill
    textColor: "{colors.fg-on-color}"          # white
  calendar-date-hover:
    background: "{colors.bg-hover}"            # Black05 fill on hover
  calendar-date-disabled:
    textColor: "{colors.border-strong}"        # Black20
    cursor: not-allowed
    fontStyle: "{typography.p2}"
  # === Modal (Default variant — verified from Components 7091:9593) ===
  modal:
    backgroundColor: "{colors.bg-surface}"           # white
    borderRadius: "{rounded.r6}"                     # 16px — CORRECTED (was r7=24)
    shadow: "{elevation.shadow-popover}"             # Depth03 — modal lifts the same as popover
    scrimColor: "rgba(0,0,0,0.5)"
    minWidth: 343px                                  # smallest desktop variant
  modal-navigation:                                  # top section (title bar)
    paddingX: 24px
    paddingY: "{spacing.s5}"
    titleStyle: "{typography.t6}"                    # 22/28
    titleWeight: 700                                 # Title6 BOLD specifically (not Regular)
    titleColor: "{colors.fg-100}"                    # Black100
    subtitleStyle: "{typography.p2}"
    subtitleColor: "{colors.fg-60}"
    backIconSize: 24px
    backIconGap: 16px
    closeIconSize: 24px
    actionGap: "{spacing.s2}"                        # 8px between action link and close
    actionSeparatorColor: "{colors.border}"          # 1px vertical separator
    indicationBadgeColor: "{colors.tertiary}"        # Emerald100 — "new" pill
    indicationTextColor: "{colors.fg-on-color}"      # white
    indicationStyle: "{typography.caps3}"            # 11px caps, weight 500, tracking 1.2
    indicationPadding: "5px 3px"
    indicationRadius: 2px
  modal-body:
    paddingX: "{spacing.s5}"                         # 24
    paddingY: 0                                      # no vertical padding — Navigation + Action sandwich it
    textStyle: "{typography.p2}"
    textColor: "{colors.fg-60}"
  modal-action:                                      # bottom button row
    padding: "{spacing.s5}"
    buttonGap: "{spacing.s3}"                        # 12px between adjacent action buttons
    buttonMinWidth: 96px
    buttonPaddingX: "{spacing.s5}"
    buttonPaddingY: "{spacing.s1}"
    # Modal action buttons are pills (--r-full / 999), same as standard Button
    # NOTE: Secondary action button in modals binds its border + text to
    # --theme-primary-hover (#FF7C55) rather than --theme-primary. This is
    # an intentional de-emphasis pattern in the canonical Modal — flagged
    # for verification against live product.
  drawer:
    backgroundColor: "{colors.bg-surface}"
    shadow: "{elevation.depth-06}"
  tooltip:                                     # DEPRECATED — see TooltipLayout below
    backgroundColor: "{colors.fg-100}"
    textColor: "{colors.fg-on-color}"
    borderRadius: "{rounded.r3}"
    shadow: "{elevation.shadow-popover}"
    fontStyle: "{typography.p3}"

  # === TooltipLayout (Components 1064:15814) ===
  # Maps to kido `Core/Overlays/Tooltip` + `@mh-core/Layouts/TooltipLayout` / `LeanTooltipLayout`.
  # The richer tooltip pattern — white surface, drop shadow, triangle pointer,
  # optional leading 72×72 image, structured Title/Body/Actions, close X.
  # Variant axes: Size × Visual Position × Pointer direction.
  tooltip-layout-shared:
    background: "{colors.bg-surface}"          # white
    borderRadius: "{rounded.r4}"               # 6 px
    shadow: "0 0 0.5px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)"   # ≈ Depth03 (custom dual)
    closeIconSize: 12px
    closeIconOffset: "right 8px, top 14px"
    pointerWidth: 15px                          # triangle 15 × 7
    pointerHeight: 7px
    imageSize: 72px                             # default leading visual (image / illustration / video)
    contentGap: 16px                            # gap between image and texts column
  tooltip-layout-medium-basic:                 # smallest: label + title only
    width: 275px
    height: 134px
    padding: "{spacing.s4}"                    # 16
    labelStyle: "{typography.caps3}"           # 11 px caps, optional
    labelColor: "{colors.fg-60}"
    titleStyle: "{typography.t8}"              # 15 / 20 — but BOLD (weight 700)
    titleWeight: 700
    titleColor: "{colors.fg-80}"
  tooltip-layout-medium:                       # standard: title + body + 2 links
    width: 275px
    height: 161px
    padding: "{spacing.s5}"                    # 24
    titleStyle: "{typography.t8}"
    titleWeight: 700
    titleColor: "{colors.fg-80}"
    bodyStyle: "{typography.p3}"               # 13 / 20
    bodyColor: "{colors.fg-60}"
    actionGap: 16px
    primaryActionColor: "{colors.primary}"      # P3 in theme primary
    secondaryActionColor: "{colors.fg-60}"
  tooltip-layout-large:                        # richest: tag + title + body + Action row + Button
    width: 370px
    height: 264px
    padding: "{spacing.s5}"                    # 24
    titleStyle: "{typography.t7}"              # 18 / 24
    titleWeight: 700
    titleColor: "{colors.fg-80}"
    bodyStyle: "{typography.p3}"
    bodyColor: "{colors.fg-60}"
    bodyMaxLines: 4                             # keep content tight
    actionsTopPadding: "{spacing.s5}"          # 20 (≈ s5)
    actionsGap: 15px
    metaLabelStyle: "{typography.meta}"        # 11 / 100% — "More info" link
    metaLabelColor: "{colors.fg-60}"
    optionalNewTagStyle: "{typography.caps4}"  # NEW badge — 9px Bold caps, 2px radius
    primaryButtonRadius: 100px                  # pill button inside tooltip
  # Variant axes shared by all sizes
  tooltip-layout-axis-size: "Medium_Basic | Medium | Large"
  tooltip-layout-axis-visual-position: "Left | Right"   # where body aligns vs pointer
  tooltip-layout-axis-pointer: "Top | Right | Bottom | Left"   # 4 sides

  # Other tooltip-family components (from search) — distinct components:
  # - Tooltip (component_set)           — base label-on-hover variant
  # - TooltipForm (component)           — form-field helper hint
  # - TooltipCallout (component_set)    — pointed callout (anchored bubble)
  # - TooltipSocial (component_set)     — social interaction variant
  # - TooltipLayout Mobile (component)  — mobile-adapted TooltipLayout
  # - Tooltip_layout_Medium_imageLeft   — Medium variant with leading image
  # - Tooltip_layout_Medium_center      — Medium variant with centered content (no leading image)
  # - XSmall (component)                — XSmall tooltip
  # All map to kido `Core/Overlays/Tooltip`. Detailed specs not yet extracted —
  # send a URL to any of these frames to mine them.
  pill:                             # chip / tag
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.fg-80}"
    borderRadius: "{rounded.full}"
    paddingX: "{spacing.s2}"
    paddingY: "{spacing.s1}"
    fontStyle: "{typography.meta}"
  tag-error:
    backgroundColor: "{colors.error-surface}"
    textColor: "{colors.error-strong}"
    borderRadius: "{rounded.r3}"
  tag-warning:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning-strong}"
    borderRadius: "{rounded.r3}"
  tag-success:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.success-strong}"
    borderRadius: "{rounded.r3}"

  # === Indication Tag (Components 718:22882) — non-interactive status badge ===
  # Maps to kido `Core/Tags/IndicationTag (Tag)` + ErrorTag + NewTag.
  # 3 sizes × 2 types × 5 colors × 2 caps modes. Canonical "NEW", "ERROR" badges.
  indication-tag-small:
    height: 13px
    paddingX: 5px
    paddingY: 3px
    borderRadius: 2px                          # literal — NOT a token
    textStyle: "{typography.caps3}"            # 11 px Medium, tracking 1.2, uppercase (Caps=On)
  indication-tag-medium:
    height: 19px
    paddingX: 5px
    paddingY: 3px
    borderRadius: 2px
    textStyle: "{typography.caps3}"
  indication-tag-large:
    height: 22px
    paddingX: 5px
    paddingY: 3px
    borderRadius: 2px
    textStyle: "{typography.caps3}"
  indication-tag-caps-off:                     # text style swap when Caps=Off
    textStyle: "{typography.meta}"             # 11 px Regular, tracking 0.4, mixed-case
  # Color × Type matrix
  indication-tag-fill-core:
    background: "{colors.primary}"             # #F56932 Amber100
    textColor: "{colors.fg-on-color}"
  indication-tag-fill-dna:
    background: "{colors.dna}"                 # #BB4ECE Fuchsia100
    textColor: "{colors.fg-on-color}"
  indication-tag-fill-emerald:
    background: "{colors.tertiary}"            # #2D7559 Emerald100
    textColor: "{colors.fg-on-color}"
  indication-tag-fill-grey:
    background: "{colors.fg-60}"               # Black60 #595959
    textColor: "{colors.fg-on-color}"
  indication-tag-outline-black:
    background: transparent
    borderColor: "{colors.fg-100}"
    borderWidth: 1px
    textColor: "{colors.fg-100}"
  indication-tag-outline-grey:
    background: transparent
    borderColor: "{colors.fg-60}"
    borderWidth: 1px
    textColor: "{colors.fg-60}"

  # === Interactive Tag (Components 711:21525) — clickable / filter chip ===
  # Maps to kido `Core/Tags/InteractiveTag`.
  # Axes: Type (Regular/Icon_Left/Icon_Right) × Size (XSmall..XLarge) × Style × State
  interactive-tag-xsmall:
    height: 20px
    paddingX: 8px
    paddingY: 2px
    borderRadius: 999px
    textStyle: "{typography.p3}"
  interactive-tag-small:
    height: 30px
    paddingX: 14px
    paddingY: 5px
    borderRadius: 999px
    textStyle: "{typography.p3}"
  interactive-tag-medium:                      # canonical default
    height: 40px
    paddingX: 20px
    paddingY: 10px
    borderRadius: 40px
    textStyle: "{typography.p3}"               # 13 / 20
  interactive-tag-large:
    height: 48px
    paddingX: 24px
    paddingY: 14px
    borderRadius: 999px
    textStyle: "{typography.p2}"
  interactive-tag-xlarge:
    height: 64px
    paddingX: 32px
    paddingY: 20px
    borderRadius: 999px
    textStyle: "{typography.p2}"
  interactive-tag-icon-size: 16px
  interactive-tag-icon-gap: "{spacing.s1}"     # 4 px between icon and label

  # Style × State matrix
  interactive-tag-outline-regular:
    background: transparent
    borderColor: "{colors.border-strong}"      # Black20
    borderWidth: 1px
    textColor: "{colors.fg-60}"
  interactive-tag-outline-hover:
    background: "{colors.bg-hover}"
    borderColor: "{colors.fg-60}"
    textColor: "{colors.fg-60}"
  interactive-tag-outline-disabled:
    background: transparent
    borderColor: "{colors.border}"             # Black10
    textColor: "{colors.fg-40}"
    cursor: not-allowed
  interactive-tag-fill-grey-regular:
    background: "{colors.bg-hover}"            # Black05
    borderWidth: 0
    textColor: "{colors.fg-60}"
  interactive-tag-fill-grey-hover:
    background: "{colors.border}"              # Black10 — darkens
    textColor: "{colors.fg-60}"
  interactive-tag-fill-grey-disabled:
    background: "{colors.bg-hover}"
    textColor: "{colors.fg-40}"
  interactive-tag-fill-white-regular:
    background: "{colors.bg-surface}"
    borderWidth: 0
    textColor: "{colors.fg-60}"
    # Use over photographic backgrounds where outline would disappear
  interactive-tag-dashed-regular:
    background: transparent
    borderColor: "{colors.fg-40}"              # Black40
    borderStyle: dashed
    borderWidth: 1px
    textColor: "{colors.fg-60}"
  interactive-tag-dashed-hover:
    background: "{colors.bg-hover}"
    borderColor: "{colors.fg-60}"
    borderStyle: dashed
    textColor: "{colors.fg-60}"
  # General (themed) style
  interactive-tag-general-selected-core:
    background: "#FFE2DE"                       # Amber10 tint
    textColor: "{colors.primary}"
    borderWidth: 0
  interactive-tag-general-selected-dna:
    background: "#F4DBFA"                       # Fuchsia10 tint
    textColor: "{colors.dna}"
    borderWidth: 0
  interactive-tag-general-selected-general:
    background: "{colors.bg-hover}"
    textColor: "{colors.fg-100}"
    borderWidth: 0

  toast:
    backgroundColor: "{colors.bg-surface}"
    borderRadius: "{rounded.r3}"
    shadow: "{elevation.shadow-popover}"
    paddingX: "{spacing.s4}"
    paddingY: "{spacing.s3}"

  # === Profile Photo (Figma 4ACEO9qefg187wlyXQOE0Q → 4:2451) ===
  # Maps to kido `Core/ProfilePhoto`, `EditableProfilePhoto`, `GatheredProfilePhotos`,
  # `ProfilePhotosRow`. The circular avatar component for genealogy / family-tree
  # surfaces. Numbered size scale (3..7) corresponds to M..XXXL labels.
  profile-photo-shared:
    shape: circle                              # border-radius: 100% (full circle)
    background: "{colors.bg-surface}"          # white
    borderColor: "{colors.border-strong}"      # Black20 #CCC default outline
    borderWidth: 1px
    # Demographic illustrations extend slightly past bottom edge (negative inset)
    iconButtonPosition: "bottom-right at 66.67% / 66.67% from top-left"
    iconButtonShadow: "{elevation.shadow-popover}"   # Depth03 (custom dual)
    iconButtonBackground: "{colors.bg-surface}"      # white — except Photo variant
  profile-photo-3-m:                           # 48 × 48
    size: 48px
    label: M
    iconButtonSize: 28px
    iconButtonInnerSize: 12px
  profile-photo-4-l:                           # 64 × 64
    size: 64px
    label: L
    iconButtonSize: 28px
    iconButtonInnerSize: 16px
  profile-photo-5-xl:                          # 72 × 72
    size: 72px
    label: XL
    iconButtonSize: 32px
    iconButtonInnerSize: 16px
  profile-photo-6-xxl:                         # 96 × 96 — canonical "list" size
    size: 96px
    label: XXL
    iconButtonSize: 32px
    iconButtonInnerSize: 20px
  profile-photo-7-xxxl:                        # 136 × 136 — hero / profile-page size
    size: 136px
    label: XXXL
    iconButtonSize: 40px
    iconButtonInnerSize: 24px

  # Demographic variants (illustration types — selected by user profile attributes)
  # All share the same circular surface; only the inner illustration differs.
  profile-photo-variants:
    - General             # default / neutral
    - Male                # adult male illustration
    - Female              # adult female illustration
    - Boy                 # child male illustration
    - Girl                # child female illustration
    - Photo               # uses user's uploaded photo (no illustration)

  # State overrides
  profile-photo-state-default:
    borderColor: "{colors.border-strong}"      # Black20 default ring
  profile-photo-state-hover:
    # Border picks up the demographic accent + Depth03 outer shadow
    # Examples: Female hover → #FC8181 (Scarlet60), Male hover → #17B4CE (Sapphire80)
    shadow: "{elevation.shadow-popover}"
    borderColorByVariant:
      Male: "#17B4CE"      # Sapphire80 — male demographic accent
      Female: "#FC8181"    # Scarlet60 — female demographic accent
      Boy: "#17B4CE"       # child male shares male accent
      Girl: "#FC8181"      # child female shares female accent
      General: "{colors.border-strong}"  # neutral stays Black20
      Photo: "{colors.border-strong}"     # photo variant stays neutral too
  profile-photo-overlay-photo:                 # Edit overlay differs for Photo variant
    iconButtonBackground: "{colors.primary}"   # Amber100 bg (theme primary)
    iconColor: "{colors.fg-on-color}"          # white edit icon inside
    # On illustration variants, the IB is white bg with Black80 icon
---

## Source-of-Truth Hierarchy

When tokens or values conflict across the docs, follow this priority (highest first):

1. **kido Storybook bundle** (production code, monorepo `@mh-core` + `@mh-business`). The CSS variable `--theme-color-primary` system is canonical.
2. **Figma `Components` / `Styles` files** (Figma file keys at the end of this doc). Truth for visual specs not exposed in CSS.
3. **`CLAUDE.md` / `SKILL (4).md`** in `~/Downloads/Design MD/`. Useful but contains known stale values (`--mh-*` naming, spacing s11–s15, hover color, modal radius).
4. **`README.md`** brand prose (voice, personas, accessibility — non-token content is canonical).

Known stale values to correct in your docs: `--mh-theme-primary-hover: #E55A23` (Figma + Storybook say `#FF7C55`), spacing `s11–s15` (Figma says 72/80/96/120/160), modal radius (`r6`/16 not `r7`/24).

---

## Component Library Reference

The production component library is a **Lerna monorepo** named **kido** with two top-level packages:

- **`@mh-core`** — primitive components (Button, IconButton, Link, Card, TextInput, Modal, Tooltip, Drawer, SwitchToggle, etc.)
- **`@mh-business`** — composed business components (Accordion, FaqSection, FormControls, Profile, Genealogy/RecordCard, Chat, Share, etc.)

Stories are organized as:

- `Design/*` — token / palette / theme docs (`Design/Colors/Palette`, `Design/Constants`, `Design/Spaces`, `Design/Themes`, `Design/Typography`)
- `Core/*` — `@mh-core` components in Storybook (`Core/Buttons/Button`, `Core/Overlays/Modal`, `Core/Form/TextInput`, etc.)
- `Business/*` — `@mh-business` components

When wiring up coded components, import from the matching path under `@mh-core/...` or `@mh-business/...`. See the Storybook taxonomy at the bottom of this doc for the full list.

---

## Overview

This design system is the **canonical visual language for MyHeritage** — the family-history platform that helps people discover, preserve, and share their heritage. Internally codenamed **MH design** (production package is named **kido**).

**Brand essence.** Warm, trustworthy, emotionally meaningful. We handle deeply personal data — family photos, ancestor records, DNA results. The product must feel like a knowledgeable family member, not a startup or a clinical service. Never trendy at the expense of clarity; never AI-generic.

**Three rules that govern every screen:**

1. **One primary action per screen.** Multiple equal-weight CTAs are banned.
2. **Tokens only — no raw values.** Theme colors via `var(--theme-color-primary)` / `--theme-color-*` ramp; non-theme colors via the project's semantic tokens (`fg-100`, `bg-page`, etc. — bind to whatever your stylesheet exports); spacing / radius / typography via kido's JS constants or your CSS scale (`S0..S16`, `R0..R7`, `t1..t8`, `p1..p3`, `meta`, `caps1..4`). Never invent values — pick the nearest token.
3. **One accent per view.** Primary lives on white. Reserved for the single most important thing on the screen. **Navy is not an accent color** — it's structural chrome only (deep nav surfaces, dense text on white). Never paint a CTA on Navy and never use Navy as a primary fill.

**Themes.** Apply via the theme provider (`@mh-core/ThemeProvider`) at a section or page root. The CSS variable `--theme-color-primary` switches to the active theme's anchor (Core / DNA / Health). Never mix themes inside one component. Never override token values locally.

---

## Project Instructions

You are a senior product designer working on MyHeritage, a global genealogy platform serving users in **50+ languages**. Every output you produce must reflect the standards below. When in doubt, prioritize: **accessibility → user trust → brand consistency → visual polish → speed**.

### 1. Core principles (always apply)

1. **Use design tokens, never hardcoded values.** Every color, spacing, font size, radius, and shadow must come from the token list in this document. If no token fits exactly, pick the nearest — never invent a value.
2. **Mobile-first.** Design the smallest screen first, then scale up. Default to a **375 px** viewport for mobile mockups. Touch targets ≥ 44 × 44 px.
3. **RTL-ready.** Never use `left` / `right` in CSS — use `inline-start` / `inline-end` or other logical properties (`margin-inline-*`, `padding-inline-*`, `border-inline-*`). Mirror layout, not text content (numbers and punctuation stay LTR).
4. **Apply all four personas to every feature.** Curious Beginner · Dedicated Researcher · Family Connector · DNA Explorer. Note explicitly how each is served — or say explicitly when a feature isn't for one of them. Never silently ignore a persona.
5. **Six user states for every screen.** First-time · returning · power · no-data · guest · subscribed. If a state isn't relevant, say so — don't skip it silently.
6. **WCAG 2.1 AA minimum.** 4.5:1 contrast for body text, 3:1 for large text and UI components. Full keyboard navigation, visible focus rings, semantic HTML, `aria-label` on every icon-only button.
7. **Family history is emotionally loaded.** DNA results, deceased relatives, adoption, ethnicity surprises — handle every one of these with care and neutral language. **Never blame users in error states.** See "MyHeritage-specific edge cases" below.

### 2. Brand voice & tone

**Voice:** Warm, trustworthy, empowering, inclusive. Like a knowledgeable friend, not a corporate brochure.

**Do:**

- Celebrate milestones — *"You found your great-grandmother!"*
- Use reassuring language in errors — *"Let's try that again"*, not *"Invalid input"*
- Acknowledge emotion briefly when relevant — without overdoing it
- Use plain language — assume a non-technical reader
- Be specific with numbers and named entities

**Don't:**

- Use clinical or detached phrasing for sensitive content (DNA, deceased relatives, adoption)
- Blame the user in error messages — *"You entered…"*, *"Your mistake…"*
- Use more than one exclamation point per screen
- Use idioms or culturally specific references (we localize into 50+ languages)
- Refer to deceased people as *"dead"* — use *"passed away"* or simple past tense

### 3. MyHeritage-specific edge cases

These are the things generic design systems don't cover. Handle every one of these — every time.

**Names**

- Support complex names: hyphens, apostrophes, particles ("van der", "de la"), multiple last names, single names, non-Latin scripts (Hebrew, Arabic, Cyrillic, CJK).
- Don't truncate names aggressively in cards — show **2 lines**, then ellipsis.
- Don't capitalize-correct user input — some names are intentionally lowercase or mixed case (`k. d. lang`, `bell hooks`).
- Allow at least **50 characters** for first name, **50** for last name, more for full name.

**Dates**

- Support partial dates: `1850` · `March 1850` · `circa 1850` · `before 1900` · `between 1850–1860`.
- Use locale-appropriate formatting (DD/MM/YYYY in EU, MM/DD/YYYY in US, YYYY/MM/DD in JP).
- Never force a "valid" full date — genealogy is full of approximations.

**Places**

- Show historical place names alongside modern ones — `Königsberg (now Kaliningrad)`.
- Don't validate historical records against a modern geocoder.
- Support transliteration variants — `Lviv` / `Lwów` / `Львів` / `לעמבערג` all refer to the same city.

**Deceased relatives**

- Use **past tense** in profiles — *"was born in"*, not *"is born in"*.
- Avoid `deceased` badge styling that feels like a warning. Use a subtle `✦` glyph or birth/death dates instead.
- Don't suggest *"Send message"* or *"Connect"* actions on deceased profiles.
- Never use the word *"dead"* — say *"passed away"* or just past tense.

**DNA results**

- Always include a *"What does this mean?"* link near every percentage and match.
- Show confidence intervals, not point estimates — *"48–52%"*, not *"50%"*.
- Use neutral, contextualized language for ethnicity surprises — never *"you are X% Y"* with no framing.
- Privacy controls live in-context, never buried in settings.

**Privacy indicators**

- Show a clear visual indicator (lock icon or label) on any private / family-only content.
- Never default new content to *"public"* — opt-in only.
- Use the same indicator everywhere — don't invent new privacy iconography per surface.

**RTL languages**

- Mirror layout, **not** punctuation or numbers. Punctuation and digits stay LTR even inside an RTL string.
- Don't flip icons with inherent direction (clocks, logos, brand marks). **Do** flip directional icons (arrows, back, chevrons).
- Test Arabic **and** Hebrew specifically — they have different ligature behavior and case-mapping rules.
- Use logical CSS properties (`margin-inline-start`, `padding-inline-end`) — never `margin-left` / `margin-right`.

---

## Colors

The palette is anchored on **Amber** (primary, the only accent color) and a wide categorical scale (Scarlet, Apricot, Forest, Azure, Sapphire, Fuchsia, Marine, Blueberry, Violet, Bumblebee, Pistachio, Emerald) with 12 stops each (180 → 03). Navy exists as a deep structural chrome color but is **not** used as an accent.

### Brand & semantic at a glance

| Role | Token | Hex | Notes |
|---|---|---|---|
| Primary | `--theme-color-primary` (Core: `#F56932`) | `#F56932` | Amber100. Single accent per view. Always on white surface; never on Navy, Apricot, or Scarlet. |
| Primary hover | `--theme-color-primary-hover` (Core: `#FF7C55`) | `#FF7C55` | Amber80 — **lightens** by one stop (100 → 80). All three active themes follow this pattern. |
| Primary disabled | `--theme-color-20` (Core: `#FFD1C3`) | `#FFD1C3` | Amber20 — disabled state binds to the 20-stop, no dedicated disabled var. |
| Link | `link` (`#E65F19`) | `#E65F19` | Redder than primary so links anchor to text. |
| Success | `success` (`#35AC5D`) | `#35AC5D` | Forest140 (AA-safe) |
| Warning | `warning` (`#F7AA66`) | `#F7AA66` | Apricot100 |
| Error | `error` (`#EF4232`) | `#EF4232` | Scarlet100 |

### Text & surface

| Role | Token | Hex | Use |
|---|---|---|---|
| `fg-100` | Body / heading text | `#000000` | Default |
| `fg-80` | Secondary text | `#333333` | Less prominent paragraphs |
| `fg-60` | Supporting / placeholder | `#595959` | |
| `fg-40` | Disabled | `#999999` | |
| `bg-page` | Page background | `#F7F7F7` | |
| `bg-surface` | Cards, panels, modals | `#FFFFFF` | |
| `bg-subtle` | Row stripes, dividers | `#F3F5F7` | Navy03 |
| `border` | 1px hairline | `#E5E5E5` | Black10 |

### Sub-brand themes

> **Verified from kido Storybook production code** (`./packages/business/themes/`). The system's CSS variable for the active theme is **`--theme-color-primary`** (and `-hover`), with a full ramp `--theme-color-{3,5,10,20,40,60,80,100,120,140,160,180}` per theme.

The production system ships **three operational themes**:

| Theme | Primary (`--theme-color-primary`) | Hover (`--theme-color-primary-hover`) | Family | Use |
|---|---|---|---|---|
| **Core** (default) | `#F56932` (Amber) | `#FF7C55` (Amber80) | orange | Genealogy / family-tree / default chrome |
| **DNA** | `#BB4ECE` (Fuchsia) | `#C663DB` (Fuchsia80) | purple | DNA testing, ethnicity, matches |
| **Health** | `#0CA3C6` (Sapphire) | `#17B4CE` (Sapphire80) | blue | Health vertical |

All three themes **lighten** on hover by one stop (`100 → 80`).

**Important corrections vs. earlier docs:**

- The CSS variable namespace exposed by kido for theme colors is `--theme-color-*` (and `--theme-rgb-color-*` for rgb tuples). Non-theme tokens (fg / bg / border / etc.) are not exposed as CSS variables by kido; they're consumed as JS constants inside components.
- `CLAUDE.md` / `SKILL.md` document an earlier `--mh-*` convention. Until proven otherwise in your shipped CSS, treat `--theme-color-*` as canonical and `--mh-*` as deprecated/aspirational.
- `OldNews`, `White`, and `Mint` themes (mentioned in older docs / Storybook exports) **are not used in MyHeritage product**. Don't reference them in new designs.
- `General` (Black60 fill) is a **Button-component product axis value** in Figma, not a full system theme. Don't treat it as a theme on par with Core / DNA / Health.

### Product accents (categorical)

| Accent | Hex | Family | Maps to |
|---|---|---|---|
| `dna` | `#BB4ECE` | purple (Fuchsia100) | DNA product theme |
| `health` | `#0CA3C6` | blue (Sapphire100) | Health product theme |

Don't substitute these. Each accent maps to a `@mh-core/ThemeProvider` theme — Fuchsia = DNA, Sapphire = Health.

### Demographic markers (family-tree)

| Marker | Hex | Token source |
|---|---|---|
| Male | `#17B4CE` | Sapphire80 |
| Female | `#FC8181` | Scarlet60 |

Established in product. Don't change these — recognition breaks.

### Full categorical ramps (12 stops each: 180 → 03)

Every Scarlet / Amber / Apricot / Bumblebee / Pistachio / Forest / Sapphire / Azure / Marine / Blueberry / Violet / Fuchsia ramp has 12 stops. Lookups by use case:

- **Body text on tinted error / warning / success surfaces:** use the `160`/`180` stop, never the `100`/`140`:
  - Error text on Scarlet05 surface → **Scarlet160** `#B71914`
  - Warning text on Apricot05 surface → **Apricot160** `#CA6E34`
  - Success text on Forest05 surface → **Forest180** `#318648`
- **Tints / backgrounds:** stops 03–10 (lightest)
- **Borders / dividers in colored systems:** stops 20–40
- **Decorative anchors / charts:** stops 60–100

The `TEST - Colors - AA 4.5:1` Figma collection enforces WCAG AA 4.5:1 body-text contrast across all combinations.

### Highlight

`#FDFF3266` (yellow @ 40% alpha) — used for text/match highlights (search hits, record matches, DNA matches). Don't use as a fill or border color.

---

## Typography

The font is **Helvetica Neue** across the system. Webfont files are bundled in `/Users/anya.borokhovich/Documents/Figma Des Sys/`:

- `Helvetica_Neue-Regular.ttf`
- `Helvetica_Neue-Medium.ttf`
- `Helvetica_Neue-Bold.ttf`

Drop these into the project's `fonts/` directory and declare with `@font-face` in `colors_and_type.css`. Recommended fallback stack: `"Helvetica Neue", Helvetica, "Inter", system-ui, -apple-system, Arial, sans-serif` (Inter is the closest neo-grotesque match for environments without the webfont).

Never set `font-size`, `font-weight`, or `line-height` manually. **Apply a utility class.**

### Scale

| Class | Token | Size / lh | Default weight | Use |
|---|---|---|---|---|
| `.mh-t1-display` | `--t1-display` | 100 / 110 | Bold | Marketing hero |
| `.mh-t1` | `--t1` | 58 / 62 | Bold | Page hero |
| `.mh-t2` | `--t2` | 48 / 52 | Bold | Section hero |
| `.mh-t3` | `--t3` | 40 / 44 | Bold | Sub-section |
| `.mh-t4` | `--t4` | 34 / 40 | Regular | Card title — typically the page `<h1>` |
| `.mh-t5` | `--t5` | 28 / 34 | Regular | Component title — `<h2>` |
| `.mh-t6` | `--t6` | 22 / 28 | Regular | Small section — `<h3>` |
| `.mh-t7` | `--t7` | 18 / 24 | Regular | Label-size title — `<h4>` |
| `.mh-t8` | `--t8` | 15 / 20 | Regular | Smallest title — `<h4>`/`<h5>` |
| `.mh-p1` | `--p1` | 18 / 28 | Regular | Large body, article intro |
| **`.mh-p2`** | `--p2` | 15 / 24 | Regular | **DEFAULT body** |
| `.mh-p3` | `--p3` | 13 / 20 | Regular | Secondary / dense body |
| `.mh-meta` | `--p-meta` | 11 / 11 | Regular | Captions, micro labels |
| `.mh-caps1` | `--caps1` | 15 caps | Medium | Section overline |
| `.mh-caps2` | `--caps2` | 13 caps | Medium | Card eyebrow |
| `.mh-caps3` | `--caps3` | 11 caps | Medium | Tag, badge |
| `.mh-caps4` | `--caps4` | 9 caps | Bold | Micro tag |

**Weight modifiers.** `.mh-t4`–`.mh-t8`, `.mh-p1`–`.mh-p3`, `.mh-meta` are **Regular** (400) by default and accept `--medium` (500) and `--bold` (700) suffix:

```html
<p class="mh-p2">Default body — Regular 400</p>
<p class="mh-p2 mh-p2--medium">Medium emphasis — 500</p>
<p class="mh-p2 mh-p2--bold">Strong emphasis — 700</p>
```

Three weight modifiers are available: **Regular** (the default, no modifier needed), **Medium** (`--medium`), and **Bold** (`--bold`).

**HTML mapping rule.** `t7` and `t8` visually compress two heading levels into similar sizes. **Never skip from `<h3>` directly to `<h5>` in markup** — use `<h4>` between them for SEO + a11y, even when the visual token is `t8`.

**Italic variants.** Italic Title4 / Title5 / Title6 / P1 / P2 / P3 are reserved for **editorial/magazine subheadings, pull quotes, blockquotes, foreign words, record titles, image credits** — not generic UI emphasis. Use the `--bold` modifier for emphasis.

---

## Elevation & Depth

Seven shadow levels, four semantic aliases. Prefer the aliases.

| Semantic alias | Resolves to | Use |
|---|---|---|
| `--shadow-card` | `--shadow-depth-02` | **Cards (default)** |
| `--shadow-card-hover` | `--shadow-depth-03` | Card hover state |
| `--shadow-popover` | `--shadow-depth-03` | Dropdowns, tooltips, popups |
| `--shadow-modal` | `--shadow-depth-05` | Modals, large popovers |
| `--focus-ring` | — | 2px orange outer ring (40% opacity) + 1px solid orange inner border |

Raw depth tokens for cases the aliases don't cover:

| Token | Use |
|---|---|
| `--shadow-depth-01` | Subtle lift |
| `--shadow-depth-04` | Floating action elements (FAB) |
| `--shadow-depth-06` | Side modals, drawers, sheets |
| `--shadow-depth-07` | Strong emphasis — full-screen lifted |

**Cards rule:** use border OR shadow, **never both**.
**Buttons rule:** no drop shadow on buttons — shadows belong on cards and overlays only.

---

## Shapes

Eight radii. No `--r2` in the system.

| Token | px | Use |
|---|---|---|
| `--r0` | 0 | Square |
| `--r1` | 2 | Slight rounding |
| `--r3` | 4 | Cards, panels |
| **`--r4`** | 6 | **Buttons, inputs — DEFAULT** |
| `--r5` | 8 | Larger components |
| `--r6` | 16 | Chips, tags |
| `--r7` | 24 | Modals, sheets |
| `--r-full` | 999 | Pills, avatars |

---

## Layout

### Spacing scale (`--s0` … `--s16`)

`0 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 56 · 64 · 72 · 80 · 96 · 120 · 160 · 200`

> ⚠ **`SKILL.md` is stale on s11–s15.** The Figma "Grid & Spacing" page is the source of truth. The previously-documented `80 · 96 · 120 · 144 · 168` for s11–s15 should be `72 · 80 · 96 · 120 · 160`. Update `colors_and_type.css` accordingly.

Keys to remember:

| Context | Padding | Section gap |
|---|---|---|
| **Default** | `--s4` (16) | `--s5` (24) |
| Compact (admin, data) | `--s3` (12) | `--s4` (16) |
| Spacious (marketing) | `--s6` (32) | `--s8` (48) |

- Icon-to-text: `--s2` (8)
- Standard padding: `--s4` (16)
- Section internal padding: `--s5` (24)
- Section gaps: `--s6`–`--s7` (32–40)
- Page-level margins: `--s12` (96)
- Hero / full-bleed: `--s16` (200)

For non-standard values, **pick the nearest token — never invent**.

### Breakpoints

The system draws against four reference frames (from the "Grid & Spacing" page in Styles):

| Frame | Width | Use |
|---|---|---|
| **Mobile** | `375px` | iPhone-class |
| **Tablet Portrait** | `768px` | iPad-class portrait |
| **Tablet Landscape** | `1024px` | iPad-class landscape |
| **Desktop** | `1680px` | Standard desktop reference (max content width is narrower — content stays in a centered band) |

The Typography library exposes the related variables (`screen/breakpoint/mobileMax`, `tabletMin`, `tabletMax`, `desktopMin`) — bind responsive typography to these tokens rather than hardcoding media-query px.

Implementation guidance: pick `375 / 768 / 1024 / 1680` as your media-query anchors. Responsive type styles already encode their own Desktop/Tablet/Mobile sizes (e.g. `Heading/H1` is `34/30/26` across those three), so don't re-implement that logic at the component level — just apply the style.

### Composition

Mobile-first responsive. Centered nav with logo on the left. Max content width ~1200px (the 1680 desktop frame leaves margin on both sides). **RTL is supported natively** (Hebrew/Arabic) — use logical properties (`margin-inline-start`, `padding-inline-end`) over directional ones whenever a layout might mirror. Never enforce a single name format.

### Backgrounds & texture

Flat `#F7F7F7` page surface mixed with **photographic hero areas** (family portraits, historical photos) and **hand-drawn illustration moments**. Illustrations are flat-colored, slightly stylized (not 3D, not gradient-heavy). **No gradients on UI surfaces.** Subtle paper / scrapbook textures appear in marketing surfaces but not in core app chrome.

### Imagery treatment

**Warm-leaning, never cool/blue.** Historical photos are treated with reverence — preserve sepia / age, do not over-correct. Avoid heavy desaturation.

### Transparency & blur

Used sparingly. Modal scrim is `rgba(0,0,0,0.5)`. Sticky nav uses **solid white, not glass blur** — we trust solid surfaces.

### Animation

Soft, purposeful, **never bouncy**. Standard ease: `cubic-bezier(0.2, 0.8, 0.2, 1)` over **180–240ms** for state changes. Page transitions fade + slide 8–12px. Respect `prefers-reduced-motion`. No vestibular triggers, no parallax-heavy hero sections.

State transitions:

- **Hover:** primary **lightens** to `#FF7C55` (Amber80 — `--theme-primary-hover` in Figma); neutral surfaces darken ~4%; cards lift shadow + 1px upward translate.
- **Press:** color shifts to `#DB510B` (Amber140 — darker); **no scale** — we don't shrink buttons.
- **Disabled:** primary → `#FFD1C3` (Amber20), text → `fg-on-color` (white) for filled buttons.
- **Focus:** orange `--focus-ring`.

> ⚠ **`README.md` says `primary-hover: #E55A23` (darker).** The Figma source-of-truth resolves it to `#FF7C55` (lighter). The Figma value is canonical for this design.md — investigate which is right in production and bring `README.md` / `colors_and_type.css` in line.

---

## Iconography

**Style.** Outline icons with a **1px stroke**. Geometric, friendly, never sharp or technical.

**Default size:** 20×20. Use the named size variant — do not scale with CSS transforms.

**Common icons** (named SVGs in `assets/icons/`): `Close · Search · ArrowRight · ArrowLeft · ArrowDown · ArrowUp · Check · Alert · Info · Plus · Minus · Edit · Delete · Settings · User · Home · Download · Share · Lock · Menu · Filter · Calendar · Back · Notification · Camera · Tree · Users · Star · Tag · Lightbulb`. Plus product-specific: `Supersearch · Story · Stars · SharedSegment · ViewRecord · Chromosome · DNA`.

- Reference by name — never draw an icon from scratch.
- Never substitute emoji for an icon.
- If an icon is missing, **tell the user — do not improvise**.
- Icon-only interactive elements **must carry `aria-label`**.

**Emoji.** Not used anywhere in product UI.

---

## Brand Assets

The complete brand kit lives at `/Users/anya.borokhovich/Documents/Figma Des Sys/` (Figma binaries) and `/Users/anya.borokhovich/Downloads/Design MD/` (extracted CSS + asset folder).

### Logos

| Asset | Path | Use |
|---|---|---|
| `Core_MH.svg` | `Figma Des Sys/_elements/Logos/` and `Design MD/assets/logos/` | Master MyHeritage wordmark — full-color on light surfaces |
| `Grey_MH.svg` | `Design MD/assets/logos/` | Monochrome wordmark for dark/colored surfaces |
| `myheritage-logo.jpg` | `Design MD/assets/logos/` | Photographic logo lockup for marketing |

> Only the Core wordmark is currently extracted. If sub-brand lockups exist (MyHeritage DNA, Health, Deep Nostalgia™), add them when sourced from the brand team.

### Avatars (demographic markers)

Canonical SVGs for family-tree avatars. Sourced from `Figma Des Sys/Avatars/`:

| Name | Use |
|---|---|
| `Male.svg` | Male relative — fills `male` (`#17B4CE`) on stroke |
| `Female.svg` | Female relative — fills `female` (`#FC8181`) |
| `Boy.svg` | Child (male) |
| `Girl.svg` | Child (female) |
| `netural.svg` | Gender-neutral / unknown (note: filename typo preserved) |

PNG raster variants at `24 · 32 · 40 · 48 · 64 · 72 · 96 · 136px` live in `Design MD/assets/avatar/` named e.g. `48-Boy.png`, `64-Female.png`, `136-Photo.png` (the `-Photo` variant is the "user has uploaded a profile photo" placeholder).

### Subscription / plan illustrations

For paywall and billing surfaces. Sourced from `Figma Des Sys/Core assest/`:

| Plan | Asset | @2x variant |
|---|---|---|
| Complete | `Complete plan.svg` | `Complete plan-1.svg` |
| Data | `Data subscription.svg` | `Data subscription-1.svg` |
| Premium | `Premium.svg` | `Premium-1.svg` |
| PremiumPlus | `PremiumPlus.svg` | `PremiumPlus-1.svg` |

### Illustration scale

The illustration library lives at `Figma Des Sys/Images/Illustrations/Standart Illustrations/`. Standard sizes:

| Size | Use | Examples |
|---|---|---|
| `32 × 32` | Inline / list-item icon-illustrations | `Center`, `Chromosome`, `Doctor`, `Gift`, `Globe`, `Group`, `Lightbulb`, `Search`, `Spark`, `Stethoscope`, `Sun`, `Wedding` |
| `48 × 48` | Small empty states, inline blocks | `DNA2`, plus `Design MD/assets/illustrations/48/` variants (Approve, DNA, Matches, Photo, Records, Settings, Supersearch, Target, Theory, UploadImage) |
| `64 × 64` | **Empty-state default** | `Alert`, `FamilyTree`, `Hourglass`, `PalmTree`, `SearchReport`, `Sunset` |
| `96 × 96` | Empty states, feature callouts | `Cookies`, `Cough`, `FamilyTreeCreate`, `Fireworks`, `Glasses`, `HealthActivity`, `Inhalator`, `MaleFemale`, `NoResults`, `Plus`, `ReportChecklist`, `Security`, `Syringe`, `Timeline`, `Virus`, `WorldDNA` |
| `136 × 136` | Large empty states / feature hero | `ChristmasLamp`, `Expert`, `Letter`, `Lifeguard`, `Report` |
| `220 × 220` | Section hero | `HealthFactors` |
| `300 × 220` | Wide feature card | `Activation`, `DNAFull`, `DNAPositiveNegative`, `HealthKitArrived`, `HealthKitDelivery`, `MicroscopeLab`, `People` |

**Advanced illustrations** (more detailed/composite) at `300x220` and `500x500`.
**Traits illustrations** (DNA traits) live in `Traits illustrations/` as numbered SVGs (`Group 1973–1982.svg`).
**Special / cover sizes** in `SpecialSizes/Cover/`.

### Collages

Photo-with-decorative-shape collages for marketing / hero contexts. From `Figma Des Sys/Images/Collages/`:

| Size | Available collages |
|---|---|
| `180 × 136` | `Tree&Record` |
| `220 × 220` | `Autorenew_offer`, `BuildTree2`, `CategoryCensus`, `SubscriptionComplete`, `SubscriptionData`, `SubscriptionPremium`, `SubscriptionPremiumPlus` |
| `300 × 220` | `Records` |

Plus `Drag photo and video.svg` for upload zones.

### Infographics

500×500 product-specific infographics at `Figma Des Sys/Images/Infographics/500x500/`:
`DNA_01`, `EthnicityEstimate2`, `PregnancyTest`, `Theory1`, `Theory2`.

### DNA Kit imagery

Marketing imagery for the DNA product. From `Figma Des Sys/Images/DNA Kits/`:
`Box_DNA_Bigtext.png`, `DNA-side 1/2/3.png`, `DNA_01.png`, `DNA_02.png`, `Packaging.154.png`, `Packaging.Renders-Version-2.1 1.png`.

### Empty-state → illustration recipe

When designing an empty state, reach for these defaults:

| Situation | Illustration | Size |
|---|---|---|
| Empty search results | `NoResults` | 96 |
| No matches yet | `SearchReport` | 64 |
| First-time tree (no relatives) | `FamilyTreeCreate` | 96 |
| Loading (long search) | `Hourglass` | 64 |
| Account / security setting | `Security` | 96 |
| Health feature | `HealthFactors` | 220 |
| DNA result placeholder | `DNAFull` | 300×220 |
| Generic upload | `Drag photo and video` | inline |

---

## Components

The full library lives in the `Components` and `UI_Kit` Figma files plus the `preview/*.html` reference renders. YAML token bindings above are starting points — exact paddings, border widths, and state behaviors should be sourced from those canonical references.

### Buttons

> Verified from the **Components** Figma file → `Buttons & Links` page (`0rQ1tceUHfyZrovd0IHV3T → 0:767`).

Buttons are a **5-axis component**: `Product × Hierarchy × Icon × Size × State`.

#### Axes

| Axis | Values |
|---|---|
| **Product** | `Core` (default) · `DNA` · `General` · plus social: `Apple · Google · Facebook · Twitter · Whatsapp` |
| **Hierarchy** | `Primary` (filled) · `Secondary` (outlined) · `Tertiary` (text-only, full padding) |
| **Icon** | `None` · `Left` · `Right` · `Split` |
| **Size** | `XSmall` · `Small` · `Medium` · `Large` (and `XLarge`/`XXLarge` for special contexts) |
| **State** | `Default` · `Hover` · `Disabled` · `Focus` · `Selected` |

**All buttons are pills** — `border-radius: 100px` (hardcoded in Figma, NOT bound to a radius token). Don't substitute `--r-full` or any other token — the design system uses a literal value here.

#### Size matrix (Core / Primary, Icon=None, Default state)

| Size | Height | Padding (Y / X) | Text style | Width example |
|---|---|---|---|---|
| **Large** | 52 px | `S3 / S7` (12 / 40) | `t6` (Title6, 22 / 28) | 145 px |
| **Medium** | 40 px | `S2 / S6` (8 / 32) | `t7` (Title7, 18 / 24) | 117 px |
| **Small** | 32 px | `S1 / S5` (4 / 24) | `p2` (15 / 24) | 93 px |
| **XSmall** | 28 px | `S1 / S4` (4 / 16) | `p3` (13 / 20) | 71 px |

#### Hierarchy × State matrix (Core, all three states)

| Hierarchy | State | Background | Border | Text |
|---|---|---|---|---|
| **Primary** | Default | `--theme-primary` `#F56932` | — | white (`--fill100`) |
| **Primary** | Hover | `--theme-primary-hover` `#FF7C55` (Amber80, **lighter**) | — | white |
| **Primary** | Disabled | `#FFD1C3` (Amber20) | — | white |
| **Secondary** | Default | transparent | 1 px solid `--theme-primary` | `--theme-primary` |
| **Secondary** | Hover | `#FFF5F4` (Amber03 — very subtle tint) | 1 px solid `--theme-primary` | `--theme-primary` |
| **Secondary** | Disabled | transparent | 1 px solid `#FFD1C3` (Amber20) | `#FFD1C3` (Amber20) |
| **Tertiary** | Default | transparent | — | `--theme-primary` |
| **Tertiary** | Hover | `#FFF5F4` (Amber03 — same subtle tint as Secondary hover) | — | `--theme-primary` |
| **Tertiary** | Disabled | transparent | — | `#FFD1C3` (Amber20) |

**Pattern summary:**

- **Filled (Primary) hover** = lighten the brand color (`Amber100 → Amber80`).
- **Outlined / text (Secondary, Tertiary) hover** = add a very faint `Amber03` background tint behind the button — the border / text color does not change.
- **Disabled across all three** = remap the colored part(s) to `Amber20` (`#FFD1C3`). Filled keeps white text on Amber20 fill; outlined uses Amber20 for both border and text; text-only uses Amber20 for text.

> **Tertiary ≠ Link.** A Tertiary button keeps its full size/padding (so it can sit next to a Primary in a button row) and is **not underlined**; a Link (see below) has no padding, no background, no border, and **is underlined** — it's an inline text element. Choose Tertiary when you need *button affordance* without weight; choose Link when it's inside a paragraph or table cell.

#### Destructive

Destructive actions use Tertiary visual treatment with `error` text — **never** Primary styling.

#### Other rules

- **One primary CTA per view.** Stack primary + secondary, never primary + primary.
- **No drop shadows on buttons.** Shadows are for cards and overlays only.
- **No full-width buttons on desktop.** Use `fit-content` or a fixed max-width unless explicitly mobile-only.
- **No bouncy / scale animation** on press. State transition is color-only over `180–240 ms` with `cubic-bezier(0.2, 0.8, 0.2, 1)`.

### Theme overrides (Product axis)

The same Primary Large button takes a different background per `Product`:

| Product | bg (Default) | Notes |
|---|---|---|
| **Core** | `#F56932` (Amber100 / `--theme-primary`) | Default Genealogy / family-tree |
| **DNA** | `#BB4ECE` (Fuchsia100 / `Table/Fuchsia/Fuchsia100 - DNA`) | DNA product surfaces |
| **General** | `#595959` (Black60) | Neutral / unbranded — note: this is the only theme where the button is NOT a brand color. Used for chrome contexts that should de-emphasize brand. |

> **The Figma Button "Product" axis exposes Core / DNA / General, while the kido `@mh-core/ThemeProvider` exposes Core / DNA / Health.** When themes don't match between Figma and code, follow code — i.e. the three themes above. "General" is a button-only neutral fill, not a system theme.

Text color stays white across all three themes. Border-radius (100px pill), padding (`S7 / S3`), and text style (`t6`) are identical — only the fill color changes.

### Social sign-in buttons

A **separate component** (`Button - Social`, `179:13`) with its own schema: `Device × Product × State`. Fixed size: **300 × 34**. Radius: **20px** (smaller pill than regular buttons). Text style: **P3 Medium** (13/20, weight 500, tracking 0.3px).

| Provider | Background | Border | Text color | Font | Default label |
|---|---|---|---|---|---|
| **Facebook** | `#4266B2` (`Social/Facebook`) | — | white | Helvetica Neue Medium | "Continue with Facebook" |
| **Twitter** | `#00ACED` (`Social/Twitter`) | — | white | Helvetica Neue Medium | "Share on Twitter" |
| **WhatsApp** | `#49CF77` (`Social/WhatsApp`) | — | white | Helvetica Neue Medium | "Share on WhatsApp" |
| **Google** | white | 1px solid `#E5E5E5` (Black10) | `#3F4245` (near-black) | **Product Sans Regular** (brand-required) | "Continue with Google" |
| **Apple** | white | 1px solid `#E5E5E5` (Black10) | `#595959` (Black60) | Helvetica Neue Medium | "Continue with Apple" |

- Icon is 20×20 at left position with 10px from edge.
- Google **must** use Product Sans — Google's brand guidelines require it for "Continue with Google" buttons. Don't substitute.
- Apple's button visually mirrors Google's (white + light border) per Apple's Human Interface Guidelines — but uses Helvetica Neue and Black60 text.
- Device axis (`Desktop` / `Mobile`) likely affects width / label length — verify per project.

### Icon Button

Separate component (`806:15804`) with a richer schema than the standard Button:

| Axis | Values |
|---|---|
| **Size** | Medium · Large · XLarge · XXLarge |
| **State** | Default · Hover · Disabled |
| **Shape** | Transparent · Circle · Square |
| **Type** | GrayIcon · ColoredIcon · Outline |

Medium size is **40 × 40** with a 20×20 icon centered. `GrayIcon` Default uses `fg-60` (`#595959`) for the icon stroke; `ColoredIcon` uses the theme primary; `Outline` adds a 1px border.

### Button Group (segmented control)

Component `810:15813`. Three-segment toggle for mutually-exclusive choices.

| Property | Value |
|---|---|
| Container | white surface, 320px wide × 40px tall |
| Container radius | `r4` (6px) — **not** the button pill 100px |
| Container shadow | `--shadow-depth-04` (`0 10px 20px 0 rgba(0,0,0,0.05)`) |
| Segment padding | `S3` (12px) |
| Icon-to-text gap (within segment) | `S2` (8px) |
| Segment text | `p2` (15/24, Regular) |
| Vertical separators | 1px between segments |
| **Selected segment** | bg = `--theme-primary` (`#F56932` Core), text = white |
| **Unselected segment** | bg = white, text = `fg-60` (`#595959`) |

Variant axes: `Selection (Left/Center/Right) × Options (Three) × Content (Icon&Text / Text Only) × Outline (No/Yes) × Rounded (No/Yes) × Variant (Primary/Secondary)`. The rounded variant gives the container `r-full` (pill); the outline variant adds a border instead of relying purely on shadow.

### Size scaling verified (Medium)

Medium Primary state values confirm the Large pattern:

| State | bg | Text style | Padding |
|---|---|---|---|
| Default | `--theme-primary` `#F56932` | `t7` 18/24 | `S2/S6` (8/32) |
| Hover | `--theme-primary-hover` `#FF7C55` | `t7` 18/24 | `S2/S6` (8/32) |

So the **state pattern is size-invariant** — bg/text colors change identically across Large/Medium/Small/XSmall; only padding and text style differ per size.

### Links

> Verified from `Components → Buttons & Links → Button_Link` (`6954:31621`). All three sizes confirmed.

Separate component, **not a button hierarchy**.

| Size | Text style |
|---|---|
| **Large** | `p1` (18 / 28) |
| **Medium** | `p2` (15 / 24) |
| **Small** | `p3` (13 / 20) |

- No background, no border, no padding box.
- **Always underlined** — distinguishes the inline link from a Tertiary button. Use `text-decoration: underline` with a small `text-underline-offset` (~3 px) for readability.
- Optional start-icon and end-icon, default size **12 × 12**.
- Gap between icon and label: `S1` (4 px) at every size.
- Text color: `--theme-color-primary` (switches with the active theme via `@mh-core/ThemeProvider`).
- States: `Default · Hover · Disabled`.

### Action Trigger

A **text+icon button-like component**, separate from both Button and Link (`627:16874`). Use it for in-content "do something" affordances where a Button feels too heavy — closer to a chip than a button.

| Axis | Values |
|---|---|
| **Theme** | Gray · White · Themed |
| **Size** | XSmall · Small · Medium |
| **State** | Default · Hover · Disabled |
| **Icon** | Left · Right |

**Medium / Gray / Default:**

- Padding: `S3 / S2` (12 px / 8 px)
- Radius: `r3` (4 px) — squared, NOT a pill
- Gap (icon ↔ text): `S2` (8 px)
- Icon: 20 × 20
- Text: **`t7` Medium** (18 / 24, weight 500)
- Text color: `--element80` (#333) for Gray theme; `--theme-primary` for Themed; configurable for White

> The Gray theme uses an `--element80` variable name (≈ `#333`) — separate from `fg-80`. They resolve to the same value but be aware of the alias.

### Switch Toggle

Standard on/off toggle (`796:16547`). Schema: `Size × Selected × State`.

| Property | Medium | Large |
|---|---|---|
| Container | 30 × 18 | (larger; pattern same) |
| Track | 30 × 14, vertical-center, `r-full` | |
| Thumb | 18 × 18 circle, white, shadow `--shadow-depth-01` | |
| Track bg ON (`Selected=Yes`) | `--theme-primary` (`#F56932` Core) | |
| Track bg OFF (`Selected=No`) | `#CCC` (Black20) | |
| Thumb position ON | right (x=12) | |
| Thumb position OFF | left (x=0) | |
| States | Default · Hover · Disabled | |

### Button Toggle

Single toggleable button (`1919:88745`) — visually a single segment of a Button Group, but standalone. Use for icon-with-label toggles outside of segmented controls.

| Axis | Values |
|---|---|
| **State** | Selected Primary · Selected Secondary |
| **Content** | Icon & Text · Text Only |
| **Style** | Shadowed · Flat |
| **Rounded** | No · Yes |

**Selected Primary / Icon&Text / Shadowed / Rounded=No:**

- Size: 86 × 40
- Container: white surface, `r4` (6 px) radius, `--shadow-depth-04` (soft)
- Active fill: `#F56932` (Amber100 / Theme Primary), white text
- Padding: `S3` (12 px) all sides
- Gap: `S2` (8 px) icon ↔ text
- Text: `p2` (15 / 24)
- Icon: 20 × 20

`Rounded=Yes` swaps `r4` → `r-full` (pill).
`Style=Flat` drops the shadow.

> **Button Group (segmented control)** — already documented above. Three-segment toggle, 320 × 40, white container with `r4` radius and `--shadow-depth-04`. Selected segment fills with `--theme-color-primary` and white text. See the Button Group section under Buttons.

### Button Group Vertical (zoom-style)

Two-icon vertical control (`810:17220`) — for zoom in/out, increment/decrement on a map or canvas.

| Property | Value |
|---|---|
| Size | 32 × 63 |
| Container | white surface, `r3` (4 px) radius, soft drop-shadow `0 10px 10px rgba(0,0,0,0.05)` |
| Icons | Plus (top), Minus (bottom) — 12 × 12 each at opacity **0.65** |
| Separator | 1 px × 22 px, `border` (`#E5E5E5`), centered horizontally between the two icons |
| States | Default · Hover_Plus · Hover_Minus |

The 0.65 opacity on the icons is intentional and brand-specific — keeps the control quiet when not in focus. **Don't bump to full opacity.**

### Button Group Collapsed

A single-row dropdown trigger that visually mirrors a Button Group segment (`751:16695`). Use when a segmented control would have too many options — collapse them behind one button.

| Property | Default / Outline=Yes / Rounded=Yes |
|---|---|
| Size | 345 × 40 |
| Container | transparent bg, 1 px solid `border-strong` (`#CCC` Black20) |
| Radius | **30 px** (pill-ish but **not** `--r-full` / 999) |
| Padding | `S4 / S2` (16 px / 8 px) |
| Text | `p2` (15 / 24), color `fg-60` (`#595959`) |
| Trailing icon | 12 × 12 chevron-down, right-aligned (15 px from edge) |
| Variant axes | `Outline (No/Yes) × Rounded (No/Yes)` plus `State (Default/Hover/Focus)` |

> **30 px radius is a deliberate fixed value** — not a token. Reproduce as-is; don't snap to a token approximation.

### Icon Button — Shape variants (verified)

> Building on the Icon Button basics already documented (`806:15804`).

**Transparent shape** (most common): no background, no border. The icon sits in a 40×40 hit target with default color `fg-60`.

**Circle shape** (Large Default Outline example, `5664:90986`):

| Property | Value |
|---|---|
| Container size | 48 × 48 (uses `--s8`) |
| Border | 1 px solid `rgba(0,0,0,0.2)` (Black @ 20% alpha — `--neutral/blackstransparent/black20`) |
| Radius | `100 px` (becomes a perfect circle at 48 × 48) |
| Icon | 20 × 20 centered, color `fg-60` |

**Square shape**: same as Circle but radius drops to `r4` (6 px). Used in dense toolbars where Circle would feel too prominent.

**Outline Type:** adds the 1 px translucent border (above) around any Shape.
**ColoredIcon Type:** swaps icon color to `--theme-primary`.
**GrayIcon Type:** default — icon color `fg-60`.

### Cards

White surface, `--r3` or `--r5` corners, **either** a 1px hairline border **or** `--shadow-card` (never both). Internal padding `--s5` (24px). Card-hover lifts to `--shadow-card-hover` + 1px upward translate.

Standard hierarchy inside a card: image → title (`.mh-t7`) → meta (`.mh-meta`) → body (`.mh-p3`). Family-member, record, photo, and DNA-match cards share this skeleton.

### Modals

> Verified from `Components → Modal - Default` (`0rQ1tceUHfyZrovd0IHV3T → 7091:9593`).

White surface, **`--r6` (16 px)** corners — *not* `--r7` (24 px); earlier docs were wrong. Lifted with `--shadow-popover` (Depth03 — `0 2px 8px rgba(0,0,0,0.10), 0 0 1px rgba(0,0,0,0.20)`). Scrim `rgba(0,0,0,0.5)`. Never a modal inside a modal.

#### Anatomy (three stacked blocks)

```
┌──────────────────────────────────────────────┐  ← border-radius: 16px
│  Navigation                                   │
│  [←]  Title          Subtitle   [Btn-Link │ ×]│  ← --s5 (24px) padding all sides
│       [new]                                   │
├──────────────────────────────────────────────┤
│                                               │
│  Body content (--p2, Black60)                 │  ← --s5 (24px) X, 0 Y
│                                               │
├──────────────────────────────────────────────┤
│                          [Cancel] [Confirm]   │  ← --s5 (24px) padding
└──────────────────────────────────────────────┘  ← buttons: pill --r-full
```

1. **Navigation** (top) — title bar
2. **Body** (middle) — content area
3. **Modal_Action** (bottom) — action button row

Any of the three can be omitted: a confirmation alert often has Navigation + Action only; a content scroller often has Navigation + Body only.

#### Navigation block

- Padding: 24 px X · `--s5` (24 px) Y
- **Title:** `t6` BOLD (`22 / 28 · weight 700`), color `fg-100` (Black100) — note: **Title6 *Bold*, not the default Regular**.
- **Subtitle:** `p2` (15 / 24), color `fg-60` (Black60). Optional, hidden by default.
- **"new" indication badge** (optional): Emerald100 (`#2D7559`) bg, white text in `caps3` (11 px caps, weight 500, tracking 1.2 px), 5 × 3 padding, **2 px** radius.
- **Back arrow** (optional): 24 × 24 icon with 16 px right-padding before the text.
- **Close icon:** 24 × 24, right-aligned. Always include unless modal is destructive-confirm-required.
- **Inline action** (optional): a `Button_Link` (theme primary) on the right side, separated from the Close icon by an 8 px gap and a 1 px vertical separator (`border`).

#### Body block

- Padding: `--s5` (24 px) horizontal · `0` vertical. The body sandwiches naturally between Navigation and Action — no extra vertical padding is needed.
- Default text: `p2` (15 / 24), color `fg-60` for prose; `fg-100` for any inline emphasis.
- Body can host anything: form fields, lists, media, custom layouts. Internal density follows the system spacing scale.

#### Modal_Action block

- Padding: `--s5` (24 px) all sides
- **Buttons are pills** — same `--r-full` / `100 px` radius as standard Button (✱ Modal Action does **not** redefine the radius; it inherits).
- Button gap: `--s3` (12 px) between siblings; if multiple groups wrap, vertical gap `--s2` (8 px) and horizontal gap `--s12` (80 px).
- **Min-width:** 96 px per button — prevents single-word labels from collapsing too small.
- **Convention:** rightmost = Primary action, immediately-left = Secondary/Cancel. Order is **never reversed** (no "OK Cancel" Mac-style).

> **Known quirk:** the Secondary action button in the canonical Modal binds its border + text to `--theme-primary-hover` (`#FF7C55`) instead of `--theme-primary`. This is documented as-is from Figma; it makes the secondary slightly de-emphasized vs. the primary. Verify whether this is intentional in production before propagating.

#### Sizes — Desktop

| Width × Height | Use |
|---|---|
| **343 × 276** | Alert / confirmation (smallest) |
| **570 × 340** | Small dialog (default for most flows) |
| **660 × 340** | Medium — forms, multi-field input |
| **970 × 340** | Wide — table previews, side-by-side comparisons |
| **1024 × 702** | Full-screen modal |

Height grows with content — these are anchor sizes, not hard caps.

#### Sizes — Mobile (375 px viewport)

The mobile system has **three layouts** (sketched in Figma side-by-side):

1. **Full screen** — `375 × 667` (entire viewport). Use for multi-step flows, takeover content, photo viewers.
2. **Fluid bottom sheet** — `375 × 340` (height depends on content), anchored to bottom of viewport, content slides up. Use for menus, quick actions, share sheets.
3. **Centered with overlay** — `343 × 340` centered in viewport with backdrop scrim. Use for alerts, confirmations — same shape as the desktop 343 × 276 dialog.

#### Overlay / Scrim

- Color: `rgba(0,0,0,0.5)` — fixed across all modal types.
- Click on scrim **does** dismiss for non-destructive modals; **does not** dismiss for confirmation / destructive modals (force a button choice).
- Press `Esc` always dismisses (same rule as scrim click — non-destructive only).

#### Other rules

- **Never stack modals.** No modal inside a modal. If a flow needs to branch, either push to a new modal step in the same container or close-and-reopen.
- **One primary action per modal.** Same rule as the rest of the system.
- **Never use a red CTA.** Destructive confirmations use the standard Primary fill (theme color) for the confirm action and a Secondary outline for cancel — the *copy* communicates the destructive intent, not the color. If the destructive affordance lives in the modal body (e.g. an inline "Delete" link), use the Tertiary visual treatment with `error`-colored text. No red filled buttons anywhere in the system.
- **Trap focus** while modal is open; restore focus to the trigger on close.
- **Lock body scroll** while modal is open.
- **Animation:** modal scales in from 96% with a 180–240 ms `cubic-bezier(0.2, 0.8, 0.2, 1)` and fades. Scrim fades to 0.5 over the same duration. Reverse on close. Respect `prefers-reduced-motion` (drop the scale, keep the fade).
- **Don't theme modals.** Like Footer, modals stay white-surface across DNA / Health product surfaces — they're chrome and don't pick up `--theme-color-*`.

#### Variant guidance

The canvas is named **Modal - Default** — the canonical modal. Other modal-family components likely exist on sibling canvases (Drawer, Sheet, Toast, Tooltip — see other component sections). Default modal is for centered dialogs that require user attention or input. For bottom-anchored sheets on mobile see the "Fluid bottom sheet" layout above; for side panels see the separate **Drawer** component.

### Tooltips (TooltipLayout)

> Verified from `Components → Tooltips canvas → TooltipLayout` (`0rQ1tceUHfyZrovd0IHV3T → 1064:15814`). Maps to kido `Core/Overlays/Tooltip` + `@mh-core/Layouts/TooltipLayout` / `LeanTooltipLayout`.

The MyHeritage tooltip family is **richer than a typical label-on-hover** — it supports leading images, structured title/body content, primary action buttons, NEW badges, and 8 anchor-position combinations.

#### Surface

All tooltip layouts share:

| Property | Value |
|---|---|
| Background | white (`bg-surface`) |
| Border radius | `r4` (6 px) |
| Shadow | `0 0 0.5px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)` — custom dual (close to `--shadow-depth-03` but with smaller blur) |
| Triangle pointer | 15 × 7 px, anchored to one side of the bubble, points at the trigger |
| Close icon | 12 × 12 X icon at right:8, top:14 — **always present** (tooltip is dismissible) |

#### Three sizes

| Size | W × H | Padding | Has leading image? | Contents |
|---|---|---|---|---|
| **Medium_Basic** | 275 × 134 | `s4` (16 px) | yes (72 × 72) | Optional caps3 LABEL + bold `t8` title (15 / 20) |
| **Medium** | 275 × 161 | `s5` (24 px) | yes (72 × 72) | Bold `t8` title + `p3` body + 2 inline Action links (primary in theme color, secondary in Black60) |
| **Large** | 370 × 264 | `s5` (24 px) | yes (72 × 72) | Optional "NEW" `caps4` indication tag + bold `t7` title (18 / 24) + `p3` body + actions row (`meta` "More info" + Action link + **primary Button pill**) |

The 72 × 72 leading visual is shown as an Amber10 (`#FFE2DE`) tinted placeholder in the design — slot it with an illustration, photo, or video thumbnail. To suppress it, use the `_Medium_center` variant (no leading image).

#### Position anatomy

```
              ▼ Pointer=Top
       ┌──────────────────────┐
       │  Tooltip body        │  ← Visual Position=Left or Right
       │                      │     decides where the body content
       └──────────────────────┘     aligns relative to the pointer
              ▲ Pointer=Bottom
```

**Variant axes (8 combinations):**

| Axis | Values |
|---|---|
| `Pointer` | Top · Right · Bottom · Left (which edge of the bubble the triangle attaches to — i.e. which side faces the trigger) |
| `Visual Position` | Left · Right (where the body content sits horizontally relative to the pointer's axis) |

Cross-product = 8 layout permutations per size = **24 total variants**. Most products only need 2–3 (Top/Left, Bottom/Left, Right/Left).

#### Other tooltip-family components

The MH tooltip system includes several distinct components beyond `TooltipLayout`:

| Component | Use |
|---|---|
| `Tooltip` (component_set) | Simple label-on-hover (no leading image, single line) — for icon-button labels and form-field hints |
| `TooltipForm` | Specialized variant for inline form field helper text |
| `TooltipCallout` | Pointed callout for onboarding tours, feature spotlights, walkthroughs |
| `TooltipSocial` | Variant used in social interaction surfaces (share / invite flows) |
| `TooltipLayout Mobile` | Mobile-adapted TooltipLayout (smaller padding, bottom-anchored) |
| `Tooltip_layout_Medium_imageLeft` | Medium with leading image (alias) |
| `Tooltip_layout_Medium_center` | Medium without leading image (text-centered) |
| `XSmall` | XSmall tooltip — likely the most compact label variant |

All map to kido `Core/Overlays/Tooltip`.

#### Rules

- **Always include the close X.** Tooltips on this system are dismissible — they don't auto-disappear like browser tooltips. Treat them as small popovers.
- **Reserve the leading 72 × 72 slot intentionally.** If you don't have an image / illustration / video to put there, use `_Medium_center` instead — don't leave the slot visibly empty.
- **One primary action max.** The Large layout has a Button slot; the Medium/Basic layouts have action links. Don't stack two primary buttons.
- **NEW tag in Large only.** The `Caps4` "NEW" badge with black outline and 2 px radius is a Large-specific affordance for highlighting new features.
- **Position the pointer toward the trigger.** If the tooltip sits below its trigger, use `Pointer=Top` (triangle on top, pointing up at the trigger).
- **Don't theme tooltips by `data-theme`.** Like Modal and Footer, they stay white-surface across all themes — chrome that doesn't pick up `--theme-color-*`.

### Tags — Indication & Interactive

> Verified from `Components → Tags canvas` (`0rQ1tceUHfyZrovd0IHV3T → 2217:96826`). Maps to kido `Core/Tags/IndicationTag (Tag)` (+ `ErrorTag` / `NewTag` shortcuts) and `Core/Tags/InteractiveTag`.

MyHeritage uses **two distinct Tag components** with different intents — pick the right one:

| Tag family | Purpose | Interactive? | Shape |
|---|---|---|---|
| **Indication Tag** | Status / category / metadata label ("NEW", "PRO", "ERROR", "Beta") | No (static badge) | 2 px corner radius (small, near-square) |
| **Interactive Tag** | Clickable filter chip, multi-select facet, "Add" button | Yes (button) | Pill (`border-radius: 40 px` or `999 px`) |

Don't substitute one for the other. Indication tags should never feel clickable; Interactive tags should always have a hover state and visible affordance.

---

#### Indication Tag

A compact, **near-square** badge used to label or flag content. Standard wherever you need a "NEW", "PRO", "Beta", or color-coded category tag.

**Sizes:**

| Size | Height |
|---|---|
| Small | 13 px |
| **Medium** (default) | 19 px |
| Large | 22 px |

Common: padding `5 px / 3 px`, **`2 px` literal border-radius** (not a token), `caps3` text style (11 px Medium, tracking 1.2 px, uppercase).

**Type × Color matrix:**

| | Fill (bg = color, text white) | Outline (bg = transparent, text = color) |
|---|---|---|
| **Core** (Amber `#F56932`) | ✓ "NEW" on Amber | ✗ not exposed |
| **DNA** (Fuchsia `#BB4ECE`) | ✓ "NEW" on Fuchsia | ✗ not exposed |
| **Emerald** (`#2D7559`) | ✓ "NEW" on Emerald | ✗ not exposed |
| **Grey** (Black60) | ✓ "NEW" on Black60 | ✓ Black60 border + text |
| **Black** (Black100) | ✗ not exposed | ✓ Black100 border + text |

**Caps modifier:**

- `Caps=On` (default) — text in `caps3` style (uppercase, tracking 1.2). Use for "NEW", "PRO", "BETA", "ERROR".
- `Caps=Off` — text in `meta` style (mixed-case, tracking 0.4). Use for proper nouns or labels where caps feel shouty ("New", "Premium").

**Pre-themed shortcuts in kido:** `NewTag` (Core Fill, Caps=On, "NEW") and `ErrorTag` (red fill, Caps=On, "ERROR"). Prefer these over composing manually.

---

#### Interactive Tag

A **pill-shaped clickable chip** for filters, facets, multi-select, and "add" actions.

**Sizes:**

| Size | Height | Padding (Y / X) | Text style |
|---|---|---|---|
| XSmall | 20 | 2 / 8 | `p3` |
| Small | 30 | 5 / 14 | `p3` |
| **Medium** (default) | 40 | 10 / 20 | `p3` (13 / 20) |
| Large | 48 | 14 / 24 | `p2` (15 / 24) |
| XLarge | 64 | 20 / 32 | `p2` |

All are pills (`border-radius` ≥ height, so corners are fully rounded).

**Type variants** (icon placement):

- `Regular` — text only
- `Icon_Left` — 16 px icon at left, 4 px gap (`s1`) to text
- `Icon_Right` — text first, then 16 px icon at right

**Style × State matrix:**

| Style | Regular | Hover | Disabled / Selected |
|---|---|---|---|
| **Outline** | transparent + 1 px Black20 border + Black60 text | + Black05 bg tint + border darkens to Black60 | Disabled: Black10 border + Black40 text |
| **Fill_Grey** | Black05 bg + Black60 text, no border | bg darkens to Black10 | Disabled: stays Black05 + Black40 text |
| **Fill_White** | white bg + Black60 text, no border | (Regular only — use over photographic surfaces) | — |
| **Dashed** | transparent + 1 px **dashed** Black40 border + Black60 text | Black05 bg tint + dashed border darkens to Black60 | — |
| **General** (themed) | — | — | SelectedCore: **Amber10 bg** (`#FFE2DE`) + Amber100 text · SelectedDNA: **Fuchsia10 bg** (`#F4DBFA`) + Fuchsia100 text · SelectedGeneral: Black05 bg + Black100 text |

**Pattern rules:**

- **Outline** is the default un-selected state for filter chips ("not picked yet").
- **General/Selected** is the "picked" state in a multi-select group — it picks up the current theme's tint.
- **Dashed** signals "add one more" — typically paired with a leading `+` icon (Icon_Left variant).
- **Fill_White** is for tags overlaid on photographs or colored backgrounds where Outline would disappear.
- **Don't mix Fill and Outline styles** within one tag group — pick one and use it consistently. Mixing creates visual chaos in filter rows.

**Selected pattern explained:** when a user picks a chip from a filter row, the tag transitions from `Outline / Regular` → `General / Selected{Theme}`. The bg becomes a faint tint of the active theme color; the text adopts the full theme color. This is why kido exposes `SelectedCore` / `SelectedDNA` / `SelectedGeneral` — the visual switches with the active `@mh-core/ThemeProvider`.

---

### Text Field (Inputs)

> Verified from `UI_Kit → Text Input page` (`uhBU7Ob9unGJbGA1XROUSR → 2726:136611`). Maps to kido `@mh-core/Inputs/TextField`, `Core/Form/TextInput`, `Core/Inputs/StyledTextField`.

The Text Field is a **3-style × 8-state** component with a distinctive **floating label** behavior. All sizes use Helvetica Neue and share the same state colors; only the wrapper differs.

#### Three styles

| Style | Total height | Border | Use |
|---|---|---|---|
| **Line** | 48 px (71 px with error msg) | bottom 1 px only | Inline forms, dense layouts, single-column auth |
| **Box - Medium** | 47 px (input 40 px) | full 1 px, `r3` (4 px) | **Default for product forms** |
| **Box - Large** | 56 px (input 50 px) | full 1 px, `r3` (4 px) | Marketing forms, hero CTAs, signup |

All three share the same internal anatomy — only the wrapper changes.

#### Anatomy

```
┌──────────────────────────────────────────┐ ← border (1 px, color per state)
│                                          │
│  Label text         (input row)   [Icon] │ ← input row 24 px tall, P2 (15/24)
│                                          │
└──────────────────────────────────────────┘
   Helper / error text                       ← 11 px Meta (Black60) or 13 px P3 (error red)
```

- **Floating label** sits inside the input at rest (P2, 15 / 24, Black60), then **shrinks to 11 px Meta and floats up** to overlap the top border on focus or when filled. The label has a 4 px X padding with a white background so it cleanly clips the border line behind it.
- **Input text** is `p2 medium` (15 / 24 · weight 500), Black80. The 24 px text row is offset 22 px from the top in Line style; 15 px from the top in Box styles.
- **Typing cursor** is a 1 px × 14 px line in Black80.
- **Trailing icon** sits in a 28 × 28 hit target on the right, with a 20 × 20 icon (e.g. eye for password reveal, X for clear).
- **Helper / error text** appears below at top:59.5 — 11 px Meta Black60 for hints; 13 px P3 (`#EF4232`) for errors.

#### State matrix (all 3 styles)

| State | Border | Label | Input text | Notes |
|---|---|---|---|---|
| `0_Default` | 1 px Black20 (`#CCC`) | P2 Black60 inside (placeholder position) | empty | Resting empty |
| `1_Hover` | 1 px Black60 | (same as Default) | empty | Hairline darkens |
| `2_Focus` | 1 px Black60 | **Floats up to 11 px Meta Black80** | empty + caret blinks | Empty input gains focus |
| `3_FocusFilled` | 1 px Black60 | 11 px Meta Black80 (floated) | P2 Medium Black80 + caret | Active typing |
| `4_Filled` | 1 px Black20 | 11 px Meta Black80 (floated) | P2 Medium Black80 | Filled, blurred |
| `5_Filled_IconHover` | 1 px Black20 | 11 px Meta Black80 | P2 Medium Black80 | Trailing icon-button shows hover bg |
| `6_Error` | 1 px `#EF4232` | (state matches Filled or Default) | (may have content) | "Error text sentence" below in 13 px P3 red |
| `7_Error_RequiredField` | 1 px `#EF4232` | P2 Black60 inside | empty | Required-field empty error after submit |

> **Floating-label rule:** the label is *always* the 11 px Meta floated version when the input is in any of (Focus / FocusFilled / Filled / Filled_IconHover) — it returns to the full-size P2 in-input position only in `Default`, `Hover`, and `Error_RequiredField` (empty error).

#### Icon Actions (leading / trailing icons)

A separate frame on the Text Input page shows icon decorations. The most common patterns:

- **Trailing eye icon** — password fields (`Password Reveal Info` panel on the page)
- **Trailing × icon** — clear/reset filled inputs
- **Trailing chevron** — dropdown / select fields (combine with `DropdownTrigger`)
- **Trailing action label** — paired with a vertical separator (1 px Black10) when an inline action like "Show" appears

When trailing icons are present, the input row width compresses to leave space — don't push the icon outside the input bounds.

#### Common dimensions

- **Default width:** 240 px (verified on the canvas). Inputs are otherwise fluid — bind to container width unless density requires fixed.
- **Min height with error:** Line 71 px, Box-Medium 71 px, Box-Large 80 px — the extra space is the error message slot. Reserve it in your layout so the form doesn't shift when validation fires.

#### Rules

- **Use Box-Medium by default** in product forms; Box-Large for marketing / signup hero forms; Line for dense / inline scenarios only.
- **Always show a label.** Never use placeholder-as-label — when the user starts typing, the placeholder disappears and they lose context. Floating label preserves it.
- **Center the input text vertically** inside the field — typed text should sit on the vertical centerline of the input wrapper, not pinned to the bottom. The floated label sits above (overlapping the top border) so it doesn't collide with centered text.
- **Reserve the error slot.** Pre-allocate the 23 px below the input even when there's no error — avoids layout shift on validation.
- **Error text replaces helper text.** Don't stack them.
- **Border on focus changes to Black60, not theme primary.** This is intentional — keeps focus rings subtle. The visible focus state comes from the label float + caret, not a colored border.

### Text Field — additional canonical states

> Sourced from `Components → Form canvas → Text Field` (`237:783`). Adds two states beyond what the UI_Kit page documented.

| State | Behavior |
|---|---|
| `Disabled` | Border softens to Black10; input text fades to Black40; label color matches; cursor `not-allowed`. May use `bg-page` (`#F7F7F7`) instead of `bg-surface` to signal non-interactive. |
| `Helper Text` | Default state + a one-line P3 (`13 / 20`) hint below in Black60. Reserve this slot in your layout — same 23 px slot as the error message uses, so adding/removing a hint doesn't shift the form. |

There's also a **Box Select Person** type — a Box Large Text Field with a leading 28 × 28 icon-button (person silhouette) at the left edge of the input row. Used in genealogy flows ("Select an existing person from your tree"). The label sits to the right of the icon; otherwise identical to Box Large.

### Textbox (Textarea)

> Verified from `Components → Form canvas → Textbox` (`243:15232`). Maps to kido `@mh-business/FormControls/FormTextArea` and `Core/Inputs/StyledTextArea`.

Multi-line text input. Two styles:

| Style | Total height | Border |
|---|---|---|
| **Box** (default) | 80 px (input area ≈ 50 px) | 1 px Black20, `r3` (4 px) |
| **Line** | 71 px | bottom 1 px Black20 only |

Internal anatomy mirrors Text Field — floating label, helper text below — with **one addition**:

- **Character counter** in the bottom-right at top:`bottom + 20`: P3 (`13 / 20`), color Black40 (`#999`). Format: `0/200`. The number adjusts to the actual content; the limit is set per instance.

State matrix matches Text Field (Default, Hover, Focus, FocusFilled, Filled, Error, Error_RequiredField, Disabled). No `Filled_IconHover` — textareas don't have trailing icons.

### Dropdown (Select)

> Verified from `Components → Form canvas → Dropdown` (`243:15267`). Maps to kido `Core/Overlays/Dropdowns/Dropdown`, `DropdownTriggerStyledField`, and `Core/FormControls/FormDropdownStyledField`.

Visually a Text Field with a **trailing chevron** (12 × 12 down-arrow at 15 px from the right edge) and no typing-cursor on focus. Three sizes:

| Style | Height | Use |
|---|---|---|
| **Line** | 48 px | Inline / dense forms |
| **Box - Medium** | 47 px | Most product forms |
| **Box - Large** | 56 px | Marketing / signup hero forms |

State matrix (7 states — no `FocusFilled` or `Filled_IconHover`):

- `Default` — Black20 border, P2 Black60 placeholder text
- `Hover` — border darkens to Black60
- `Focus` — opens the dropdown panel; border Black60
- `Filled` — border stays Black20; label floats up to 11 px Meta Black80; input text becomes P2 Medium Black80
- `Disabled` — same softening as Text Field disabled
- `Error` — 1 px error red border + 13 px P3 error message below
- `Error_RequiredField` — required-field empty error

The dropdown panel itself is a separate component (`Core/Overlays/Dropdowns/DropdownSelector`) — that's the menu surface that opens below; styling specs for it live on a different canvas.

### Checkbox

> Verified from `Components → Form canvas → CheckBox` (`243:15268`). Maps to kido `@mh-core/Inputs/CheckBox`, `Core/Form/CheckBox/CheckBoxControl`, `Core/Inputs/StyledCheckbox`.

Two sizes × 6 states. Container has 8 px gap between box and label, 4 px vertical padding.

| Size | Container | Box size |
|---|---|---|
| **Medium** | 70 × 32 | 16 × 16 |
| **Small** | 65 × 28 | 14 × 14 |

**Box anatomy:**
- White fill, **2 px corner radius** (literal — not a token), 1 px Black40 border
- Label: P2 (`15 / 24`) Black60

**State matrix (6):**

| State | Box border | Box fill | Indicator |
|---|---|---|---|
| `Default` | Black40 | white | — |
| `Hover` | Black60 | white | — |
| `Selected` | Amber100 | Amber100 | white 12 × 12 checkmark icon |
| `Selected Hover` | Amber80 | Amber80 | white check |
| `Disabled` | Black40 | Black03 | — (or faded check if selected-disabled) |
| `Error` | `#EF4232` | white | — |
| **`Partially Selected`** (indeterminate) | Amber100 | Amber100 | white **dash** (minus icon) — for parent checkboxes with mixed children |

A **CheckboxItemSelector** variant exists (`Form canvas 3326:99547`) — a 20 × 20 checkbox used inline within `DropdownSelectorItemCheckbox` items, with "Dark" and "Light" theme variants for surfaces. Same state set otherwise.

### Radio Button

> Verified from `Components → Form canvas → RadioButton` (`243:15269`). Maps to kido `@mh-core/Inputs/RadioGroup`, `Core/Inputs/RadioBase`, `Core/Inputs/RadioGroupItem`, `Core/Inputs/StyledRadio`.

Two sizes × 6 states. Same container metrics as Checkbox (8 px gap, 4 px vertical padding).

| Size | Container | Circle size |
|---|---|---|
| **Medium** | 70 × 32 | 16 × 16 |
| **Small** | 66 × 28 | 14 × 14 |

**Circle anatomy:**
- White fill, full circle (`border-radius: full`), 1 px Black40 border
- Selected: Amber100 ring + **8 × 8 inner dot** in Amber100 (center)
- Label: P2 (`15 / 24`) Black60

**State matrix matches Checkbox** (Default · Hover · Selected · Selected Hover · Disabled · Error). No "Partially Selected" — radios are mutually exclusive by definition.

### DatePicker (Day / Month / Year)

> Verified from `Components → Form canvas → DatePicker` (`243:15270`). Maps to kido `Core/Form/DatePicker`, `Core/Form/DatePicker/AdvancedDatePicker`, `Core/Form/CalendarPicker(FormCalendarInput)`.

**Three-sub-field composite.** This is unusual: instead of a single date input, the DatePicker exposes **Day / Month / Year as three separate fields** with vertical separators between them. This is intentional to support genealogy's partial-date conventions ("abt. 1872" / "1850s" / month + year only).

| Style | Total height | Sub-field input height |
|---|---|---|
| **Box - Large** (default) | 80 px (56 inputs + 24 helper) | 50 px |
| **Box - Medium** | 80 px | 40 px |
| **Line** | 80 px | 48 px |

#### Column layout (Box variants)

```
┌────────┬────────────┬──────┐
│  Day   │   Month  ▼ │ Year │
│  12    │   May     │ 1970 │
└────────┴────────────┴──────┘
   27%        36%       35%        (left-to-right within 245 px total)
```

- **Day** — text input (1–31)
- **Month** — Dropdown with chevron (12 options, locale-formatted)
- **Year** — text input (4-digit)
- Separators: 1 px × 49 px in `rgba(0,0,0,0.2)` between Day↔Month and Month↔Year

Each sub-field has its own floating label ("Day" / "Month" / "Year") that follows the standard Text Field floating-label rules.

#### 9 states

| State | What it shows |
|---|---|
| `Default` | All three empty, all labels in-input (placeholder position) |
| `Hover` | Border darkens to Black60 on whichever sub-field is hovered |
| `Day Focus` | Day input focused (caret blinks), label floated; Month/Year still default |
| `With Day` | Day filled and blurred (e.g. "12"), label floated; Month/Year empty |
| `With Month` | Month dropdown selected (e.g. "May"); Day/Year empty |
| `Year Focus` | Year input focused; others may be partial |
| `Full` | All three filled (e.g. `12` / `May` / `1970`); borders all Black60 |
| `Error` | At least one sub-field shows the error border + below-field message |
| `Helper Text` | Default + helper text below |

**Allow partial dates.** Genealogy data routinely has year-only or month+year — the DatePicker is designed to accept that. Don't require all three fields filled to validate.

### Calendar (date-grid widget)

> Verified from `Components → Form canvas → Calendar` (`2810:96922`). Maps to kido `Core/Form/CalendarPicker(FormCalendarInput)` and related Calendar inputs.

The popover that appears when a date input is focused (when used in `AdvancedDatePicker` mode) or as a standalone date grid.

| Property | Value |
|---|---|
| Size | 326 × 316 |
| Surface | white, `r4` (6 px) radius |
| Shadow | `--shadow-popover` (Depth03) |
| Padding | `s5` top (24) · `s6` X+bottom (32) |
| **Header** | `p1 bold` (18 / 28, weight 700) Black100, e.g. "July 2022" |
| Header arrows | Two 20 × 20 icon-buttons (left / right month navigation) |
| Day-of-week row | P2 (15 / 24) Black40 — `Su Mo Tu We Th Fr Sa` |
| Date grid | 7 columns × 6 rows, **39 px column gap** · **40 px row gap** |
| Date cell size | 24 × 24 |

#### Date cell states

| State | Visual |
|---|---|
| `Default` (in-month) | Black100 number, no background |
| `Out of month` (prev / next month spillover) | Black20 (#CCC) number — visible but de-emphasized |
| `Hover` | Black05 background fill behind the number |
| `Selected` | Amber100 fill behind the number + white text |
| **`Today`** | Amber-tinted ring or fill behind the number; text stays Black100. Uses a custom-rendered `_elements/CalendarItem` shape. |
| `Disabled` | Black20 text, `cursor: not-allowed` |

The calendar is **always positioned** as a popover anchored to its trigger input — it does not appear inline by default.

### Profile Photo

> Verified from `profile-photo file → Profile Photo canvas` (`4ACEO9qefg187wlyXQOE0Q → 4:2451`). Maps to kido `Core/ProfilePhoto`, `Core/ProfilePhoto/EditableProfilePhoto`, `Core/ProfilePhoto/GatheredProfilePhotos`, `Core/ProfilePhoto/ProfilePhotosRow`.

The Profile Photo is **MyHeritage's signature avatar component** — circular, with illustrated demographic placeholders for users who haven't uploaded a photo. This is core to the genealogy experience (you see avatars for every person in a family tree, every match, every record).

#### Size scale (numbered 3 → 7 by Figma name)

| Figma name | Pixel size | Label | Icon-button size | Inner icon size |
|---|---|---|---|---|
| `3 - 48×48` | 48 × 48 | M | 28 | 12 |
| `4 - 64×64` | 64 × 64 | L | 28 | 16 |
| `5 - 72×72` | 72 × 72 | XL | 32 | 16 |
| `6 - 96×96` | 96 × 96 | **XXL** (most common in lists) | 32 | 20 |
| `7 - 136×136` | 136 × 136 | XXXL (hero / profile page) | 40 | 24 |

Smaller numbered variants (1, 2) exist for compact contexts (chat, comment threads) but aren't on this canvas — confirm if you need them.

#### Demographic variants (illustration types)

Six built-in variants — the inner illustration changes based on user profile attributes:

| Variant | Use |
|---|---|
| **General** (neutral) | Default fallback — gender / age unknown |
| **Male** | Adult male illustration |
| **Female** | Adult female illustration |
| **Boy** | Child male illustration |
| **Girl** | Child female illustration |
| **Photo** | User's uploaded photograph (no illustration) |

All share the same circular surface; only the inner illustration differs. The system uses these in lieu of generic initials-circles or grey silhouettes, which is consistent with MyHeritage's "family member" framing.

#### Surface

| Property | Value |
|---|---|
| Shape | Full circle (`border-radius: 100%`) |
| Background | white |
| Border | 1 px `border-strong` (Black20, `#CCC`) by default |
| Illustration positioning | Extends slightly past the bottom edge (negative inset ~20%) — heads "peek out" of the circle frame |

#### States

- **Default**: 1 px Black20 border, no shadow
- **Hover**: border picks up the **demographic accent color** + Depth03 shadow lift
  - Female / Girl → `#FC8181` (Scarlet60)
  - Male / Boy → `#17B4CE` (Sapphire80)
  - General / Photo → stays Black20

> The demographic-aware hover border is a brand-specific pattern: it surfaces the same Sapphire/Scarlet semantic colors used for family-tree gender markers, giving subtle visual feedback that aligns with the rest of the genealogy UI.

#### Edit icon-button overlay

The `EditableProfilePhoto` variant adds a circular icon-button at the bottom-right of the avatar (66.67% / 66.67% from top-left — overlaps the lower-right of the circle):

| Variant | Icon-button background | Icon |
|---|---|---|
| **Illustration variants** (Male / Female / Boy / Girl / General) | white | Black80 edit pencil |
| **Photo variant** | `--theme-color-primary` (Amber100 `#F56932`) | white edit pencil |

The Photo variant uses a **theme-color background** because it signals "you have a real photo here, replace it" — a more prominent edit affordance.

#### Composite components (kido)

The kido library exposes 4 ProfilePhoto components — single, editable, group, and row:

- `Core/ProfilePhoto` — single avatar
- `Core/ProfilePhoto/EditableProfilePhoto` — single with edit overlay
- `Core/ProfilePhoto/GatheredProfilePhotos` — stacked / overlapping cluster (e.g. "shared by 12 people")
- `Core/ProfilePhoto/ProfilePhotosRow` — horizontal row (e.g. family-tree sidebar)

#### Rules

- **Always render a real photo or the canonical grey demographic avatar in the slot — never an empty disc.** When the user (or relative) has uploaded a photograph, use the `Photo` variant. When there's no upload, **always** fall back to one of the canonical grey demographic illustrations from `~/Documents/Figma Des Sys/Avatars/`: `Male.svg` · `Female.svg` · `Boy.svg` · `Girl.svg` · `netural.svg` [sic — preserved typo on filename]. These are monochrome grey (`Black10` stroke on white surface) and are the only acceptable no-photo placeholders. Never substitute with: a plain background-tint disc, an initials-only circle, an icon-only silhouette, or a colored gradient placeholder — none pass the brand bar.
- **Use 96 × 96 (XXL) for list contexts** (match cards, record cards, sidebar) — this is the most common size in product.
- **Use 136 × 136 (XXXL) for profile-page hero only.** Don't bump every avatar to this size.
- **Use 48 × 48 (M) for chat / comment threads / dense lists.**
- **Pick the demographic variant from user data** — never hardcode "Male" as a fallback. If gender + age unknown, use General.
- **Don't theme by `data-theme`.** Profile avatars are content, not chrome — but they're also not themed (the demographic colors are semantic, not branded).
- **The illustration must extend past the bottom edge.** That's the brand-specific "head pokes out" treatment — don't crop or center the demographic illustration; photographs may be cropped square-to-circle as usual.
- **RTL: avatars are direction-neutral**, but if you're rendering a `ProfilePhotosRow`, mirror the stacking direction with `flex-direction: row-reverse` under `dir="rtl"`.

### Cards (CardLayout)

> Verified from `Components → CardLayout canvas` (`0rQ1tceUHfyZrovd0IHV3T → 1342:26339`). Maps to kido `Core/Cards/Card` + `@mh-business/Layouts/Cards/CardCallToAction` / `CardCallToActionList`.

MyHeritage cards are not a single component — they're a **5-variant family** sharing a common surface (white, `r4`, Depth02) but differing in layout density, content slots, and shadow treatment.

#### Common surface

| Property | Value |
|---|---|
| Background | white (`bg-surface`) |
| Border radius | `r4` (6 px) — consistent across all variants |
| Shadow | `--shadow-card` (Depth02) by default; Mobile uses a softer custom shadow; Advanced uses Depth03 (custom dual) |
| Visual slot | 175 px wide horizontal, or full-width vertical, with `#F7F7F7` (`Element03`) placeholder tint |
| Close X | 20 × 20, top-right at `right:12, top:12` — present on Default and With Separators; absent on Lean and Mobile |

#### The 5 variants

| Variant | W × H | Padding | Shadow | Shape characteristic |
|---|---|---|---|---|
| **Default** (Horizontal Right) | 550 × 188 | `s5` (24) | Depth02 | Title + body + 2 action buttons + 175 px visual slab on the right |
| **Default** (Vertical Top) | 350 × 488 | `s7` (40) | Depth02 | Visual at top, content below — for grid layouts |
| **Mobile** | 100% × 140 | `s4` (16) | Custom soft `0 2px 10px 0.1` | Single-column, no visual slab, bottom row with icon + meta text |
| **With Separators** | 562 × 303 | sectioned | Depth02 | 3 explicit sections (Header / Content / Footer) divided by Black10 hairlines |
| **Lean** | 561 × 156 | `s5` | Depth02 | Like Default but actions collapse to inline text-links — no buttons |
| **Advanced** | 561 × 184 | `s5 / s4` | Depth03 | Data-dense: P1 Bold title + subtitle row + Label/Value columns + 96 × 96 visual cluster |

#### Direction × Position axis

Each variant supports orientation overrides:

- **Direction**: `Horizontal` (default) — text column + visual side-by-side · `Vertical` — visual stacked above content
- **Position**: `Right` (default) — visual on the right · `Left` — visual on the left · `Top` — visual on top (Vertical only)

Total verified combinations: 11.

#### When to use which

| Need | Use |
|---|---|
| Hero feature callout with image, CTAs, and dismissible | **Default Horizontal Right** |
| Grid of feature cards (3-column landing) | **Default Vertical Top** |
| Match card on a mobile feed | **Mobile** |
| Dialog-shaped card with clear Header/Body/Footer separation | **With Separators** |
| Inline notice / banner with a single action link | **Lean** |
| Genealogy / record match with profile photo + record image + metadata grid | **Advanced** |

#### Anatomy notes

**Title row** — Title6 Bold (22 / 28) Black80 — **except Mobile** (Title7, 18 / 24) and **Advanced** (P1 Bold, 18 / 28 Black100). Optionally includes an inline **28 × 28 IconButton** to the right (typically a Question circle for "what is this?" tooltips). This is a Default/Lean affordance — With Separators and Mobile don't use it.

**Actions:**

- **Default / With Separators**: 2 pill buttons — outline (theme-primary border + text) + filled (theme-primary bg + white text)
- **Lean**: single inline text-link in theme-primary, P2 (15 / 24)
- **Mobile**: no explicit action buttons — the entire card is the tap target
- **Advanced**: no actions in the card body — used in scroll lists where the whole card is clickable

**Advanced variant — data grid** (the genealogy match card pattern):

```
┌────────────────────────────────────────────────┐
│ Banner title (P1 Bold)               [img1]    │
│ 🔗 Subtitle text  [NEW]              [img2]    │
│                                                │
│ Label 1:  Value 1                              │
│ Label 2:  Value 2                              │
│ Label 3:  Value 3                              │
│ Label 4:  Value 4                              │
└────────────────────────────────────────────────┘
```

- Subtitle row: 20 × 20 icon + `p3` Black60 + optional NEW indication tag (`caps4` Bold 9 px, Black10 bg, 2 px radius)
- Label/Value columns: `p3` (13 / 20), Label in Black60, Value in Black100, 4 px row gap, 16 px column gap
- Visual cluster on the right: **two 96 × 96 images** — typically a circular profile photo (`r-full`) overlaid with a record image (`r4`). Used for "you might be related to X — this record matches" pattern.

#### Shadow story

Three shadow treatments across the variant family — don't normalize them:

| Variant | Shadow | Why |
|---|---|---|
| Default · With Separators · Lean · Vertical | `Depth02` (`0 2px 4px 0 rgba(0,0,0,0.05)`) | Standard resting card |
| Mobile | `0 2px 10px 0 rgba(0,0,0,0.10)` (custom) | Softer / blurrier — better for touch surfaces |
| Advanced | `Depth03` (dual: `0.5 px` outline + `0 2px 4px 0.1`) | Slightly more lift for data-dense cards |

#### Rules

- **Pick the variant by content density, not by mood.** If you have a Title + body + 2 buttons → Default. If you have structured Label:Value pairs → Advanced. Don't make it up.
- **Border OR shadow, never both** — system-wide rule.
- **Visual slot is 175 px wide on Horizontal variants.** Don't shrink it for content fit — let the content column shrink instead.
- **Fill the visual slot with a real photo, illustration, or profile photo** — never an empty colored placeholder, a flat brand swatch, or a generic icon-on-tint. Heritage cards earn their warmth from the imagery. For record / match cards that reference a person, use the matching `ProfilePhoto` component. For feature / marketing cards, use a heritage-toned photograph or a system illustration from `Figma Des Sys/Images/`.
- **Mobile variant doesn't have a visual slab.** If you need an image on mobile, use Vertical Top.
- **Cards DO pick up `data-theme`.** Unlike Modal/Footer/Header/Tooltip (chrome), cards live in product context — title-action color, buttons, and inline links rebrand with the active theme. Verify with DNA / Health themes.

### Header

> Verified from `Accessibility-check → Header canvas` (`vFio63yA5SoKNqsZ4SBecg → 2233:37534`). Maps to kido `Business/Navigation/SimpleHeader` + the canonical `Header` and `Header Auth` component_sets in the Components library.

**MANDATORY companion to the Footer on every full-screen design.** Like Footer, the Header is non-themed chrome — stays white across DNA / Health product themes.

#### Structure — two stacked bars

```
┌─────────────────────────────────────────────────────────────┐
│ Utility strip                                  Help · 🌐 EN │  ← 36 px tall (chrome row)
├─────────────────────────────────────────────────────────────┤
│ [Logo]  Smart Matches 24  Records 448  DNA Matches   ⋯      │  ← 40 px tall (main nav)
│            🔔 1  [👤 User Name ▾]  📥  Help ▾  🌐 English ▾  │
└─────────────────────────────────────────────────────────────┘
```

**Total height:** ~76 px (36 + 40). Spans full viewport width.

#### Top utility strip (36 px)

A narrow chrome row above the main nav for tertiary navigation:

| Element | Visual |
|---|---|
| **Help dropdown** | 20 × 20 Question icon + "Help" `meta` (11 px) Black60 + 12 × 12 chevron |
| **Language picker** | 20 × 20 Globe icon + locale label (e.g. "English") + chevron |
| **"Go PremiumPlus" CTA** | Hidden by default — shown for free-tier users to upsell |
| **Secondary nav row** | Inline Help link text |

All items are right-aligned with 16 px gap between them. Text is `meta` size (11 / 100% line-height, Black60). Icons are `Small` 20 × 20 from the Header icon set.

#### Main nav bar (40 px)

**Left zone (~362 px):**

- **Logo / wordmark** — 82 × 18 px at `12 px / 11 px` padding from top-left
- **Match counters list** — 3 inline items:
  - "Review N new Smart Matches™" + 26 × 26 icon + count badge
  - "Confirm N Record Matches" + icon + count badge
  - "Review new DNA Matches" + icon (+ optional count)
- Count badges are 23 × 17 (variable-width by digit count); badge text in `meta` (11 px)

**Right zone (~485 px):**

| Element | Width | Detail |
|---|---|---|
| **Invitations icon** | 60 | 25 × 22 icon + 16 × 16 circular count badge |
| **Account menu** | 183 | 32 × 32 circular profile avatar + name (`p3`, max 100 px width, truncated) + 11 × 7 chevron |
| **Inbox link** | 43 | 18 × 13 icon (clickable, no label) |
| **Help menu** | 94 | 17 × 17 icon + "Help" label + chevron |
| **Language picker** | 90 | 17 × 17 icon (Globe placeholder) + "English" label |

Vertical 1 px hairline separators between Invitations and Account menu.

#### Header icon set

Specific icons used by the Header (in `Documents/Figma Des Sys/icons header/`):

| Icon | Use |
|---|---|
| `Normal - Question.svg` | Help dropdown |
| `Normal - Globe.svg` | Language picker |
| `Normal - Cart.svg` | Premium upgrade flow |
| `Normal - Accessibility.svg` | Accessibility menu |
| `DNA header icon.svg` | DNA match counter |
| `Matches by people header icon.svg` | Smart Matches counter |
| `Matches by source header icon.svg` | Record Matches counter |
| `Link.svg` | Generic link affordance |
| `Group 20792.svg` | Composite group (large file, likely the full logo lockup) |

These are dedicated header-sized icons — **don't substitute** them with the standard 20×20 icon set; the proportions and stroke weight are tuned for the 40 px bar.

#### RTL support

The design source ships with a Hebrew profile name (`לולו תהילה פיינסילבר`) as test content, confirming RTL is a first-class concern. Use logical CSS properties (`margin-inline-start`, `padding-inline-end`) so the entire header — including utility strip alignment, badge positions, and avatar-to-name gap — mirrors correctly when `dir="rtl"`.

#### Variants

| Variant | Use |
|---|---|
| **Header** (signed-in, default) | The version documented above — has profile avatar, match counters, inbox |
| **Header Auth** | Signed-out variant — replaces account menu with Login + Sign Up CTAs |
| **Business/Navigation/SimpleHeader** | Simpler in-product chrome header (kido) — no utility strip |

#### Rules

- **Include the Header on every full-screen design** unless the brief explicitly says no header (same rule as Footer).
- **Don't theme the Header by `data-theme`.** It stays white across all product themes — chrome.
- **Sticky at top of viewport.** Use `position: sticky; top: 0` with `z-index` high enough to clear modal scrim *only* when modals don't take over the full screen (in-product modals stack above; takeover flows hide it).
- **Sticky uses solid white, not glass blur** (consistent with the system's overall "no glassmorphism" rule).
- **Match counters must be live-counted.** Show 0 → hidden, 1+ → with badge. Never hardcode placeholders.
- **Profile name truncates with ellipsis at 100 px.** Don't expand — keeps the bar fixed-height.
- **RTL is non-negotiable.** Test every Header layout change against Hebrew / Arabic locales.

### Footer

> Verified from `Components → Footer canvas` (`0rQ1tceUHfyZrovd0IHV3T → 2209:87143`).

**MANDATORY ON EVERY FULL-SCREEN DESIGN.** Even if the brief doesn't mention it, include a footer. The only exception is when the brief *explicitly* says "no footer" — and even then, ask first.

Four variants × two device contexts (Desktop / Mobile). All variants share:

- **Background:** `bg-surface` (white `#FFFFFF`)
- **Top border / shadow:** `--shadow-depth-02` (`0 2px 8px 0 rgba(0,0,0,0.05)`) — the boundary between page and footer is a subtle lift, not a solid line
- **Default text style:** `p3` (13 / 20) for body links and copyright
- **Colors:** Black100 for titles, Black60 for body, Black40 for muted/hover, Black20 for dividers

#### Variant matrix

| Variant | CSS class | Desktop size | Mobile size | Use case |
|---|---|---|---|---|
| **Full** | `mh-footer--full` | 1420 × 308 | 320 × 298 | Marketing / homepage / landing |
| **Lean** | `mh-footer--lean` | 1420 × 60 | (use Default) | Second-tier marketing pages |
| **Default** | `mh-footer--default` | 1420 × 60 | 320 × 149 | **In-product app screens** |
| **Basic** | `mh-footer--basic` | 1420 × 60 | 320 × 110 | Help / contact / error pages |

#### Full variant — contents

The Full footer is the richest layout, used on marketing surfaces:

**Left side (~305 px column):**

1. **MyHeritage wordmark** (`Core_MH.svg`, ~184 × 32)
2. **App-download / CTA buttons** — typically two side-by-side
3. **Social icon row** — Facebook + Twitter shown by default; Instagram / TikTok / YouTube available as hidden instances, **enable per market** (e.g. show TikTok in regions where it's primary)
4. **Copyright line** — `© 2023 MyHeritage Ltd.` in `p3` Black60. Update the year per build.

**Right side — three nav columns:**

| Column | Header (`t7`) | Items (`p3`) |
|---|---|---|
| Left | Home | "Sign up for free DNA" + other primary entry-points |
| Middle | About us | Blog, User stories, Press, Careers |
| Right | Support | Contact us, Terms & Conditions, Privacy |

- Column header style: `t7` (18/24) Black100
- Nav item style: `p3` (13/20) Black60, with hover state Black100
- Inter-column gap: `--s10` (64 px) on desktop
- Vertical padding inside footer: `--s5` to `--s7` (24–40 px)

#### Default / Lean / Basic — single-row layout

These three are 60 px tall on desktop. Structure:

- Left: logo (or compact logo + tagline)
- Center: nav links separated by dots (`p3`, Black60)
- Right: copyright / region picker

**Lean** strips to just logo + copyright.
**Basic** adds a tiny meta line in `meta` (11 px) — used on error and help pages where chrome should be minimal.

#### Mobile adaptations

- Full mobile: same content as desktop, stacked vertically. Social icons wrap. Nav columns collapse to a single stacked list.
- Default mobile (149 px): the in-product baseline — logo + 1-line nav + copyright.
- Basic mobile (110 px): logo + copyright only.

#### Rules

- **Pick the variant per context** using the table above — don't substitute.
- The footer is **not** themed. It stays white-surface across DNA / Health product surfaces — chrome that doesn't pick up `--theme-color-*`.
- Hidden social icons (`Instagram`, `TikTok`, `YouTube`) must be **explicitly enabled** when you use them — don't assume they're on.
- The year in the copyright line must update every build — don't hardcode.

### Empty states

Illustration (64×64) + `.mh-t5` heading + `.mh-p2` body + single CTA. Never a blank screen.

### Feedback patterns

- **Inline field error:** `.mh-p3` + `error`
- **Toast / success banner:** small surface + Check icon + `.mh-p2`, lifted with `--shadow-popover`
- **Global error banner:** for systemic failures, not inline issues

### Layout density

| Context | Padding | Section gap |
|---|---|---|
| Default | `--s4` | `--s5` |
| Compact (admin/data) | `--s3` | `--s4` |
| Spacious (marketing) | `--s6` | `--s8` |

---

## Personas

Design for these four. **Apply all four to every feature.** When designing, briefly state how each persona is served — and if a feature isn't for a given persona, say so explicitly. Don't ignore them.

### A. Curious Beginner

*30–50 · low genealogy knowledge · moderate tech*

- **Needs:** Simple onboarding, quick wins, encouragement, plain-language explanations.
- **Avoid:** Jargon (`GEDCOM`, `endogamy`, `centimorgan`), dense data-heavy UI, advanced settings front and center.

### B. Dedicated Researcher

*50–70 · high genealogy knowledge · moderate tech*

- **Needs:** Powerful search with filters and operators, batch editing, source citations, GEDCOM import / export, the density they rely on.
- **Avoid:** Hiding advanced features behind onboarding, oversimplifying (losing fields they expect), removing density.

### C. Family Connector

*25–45 · low–medium genealogy knowledge · high tech*

- **Needs:** One-tap sharing to family members and groups, beautiful photo displays + enhancement, mobile-first flows that work without a desktop.
- **Avoid:** Desktop-only flows, friction in sharing (extra steps kill momentum), requiring a built-out tree before social use.

### D. DNA Explorer

*25–60 · variable expertise*

- **Needs:** Plain-language explanations of percentages and matches, privacy controls visible in-context, cultural and historical framing for ethnicity.
- **Avoid:** Unexplained jargon (`centimorgan`, `haplogroup`), privacy settings buried in account preferences, sensational framing of ancestry surprises.

**User-state coverage.** For every screen, design **six states**: first-time · returning · power · no-data · guest · subscribed. If a state isn't relevant to the feature, say so explicitly — don't skip it silently. Empty / no-data and first-time states are the most under-served — design them deliberately.

### Copy-writing segments (priority order)

When writing or reviewing copy, identify which segment will primarily see it:

- **The Focused Investigator** — lead with depth, discovery, research power. Reward curiosity. Show there's always more to find.
- **The Family Archivist** — emphasize ease, clarity, reassurance. Remove jargon. Highlight emotional payoff. Apply WCAG-AA language standards (this segment skews older).
- **The Carefree Explorer** — lead with excitement and instant gratification. Dynamic, forward-moving. Keep light.

---

## Voice & Copy

**Voice:** Warm, trustworthy, empowering, inclusive. Like a knowledgeable friend, not a corporate brochure.

**Tone:**

- **Do:** celebrate milestones · use reassuring language in errors (*"Let's try that again"*, not *"Invalid input"*) · acknowledge emotion briefly when relevant · use plain language · be specific.
- **Don't:** use clinical phrasing for sensitive content · blame the user (*"You entered…"*, *"Your mistake…"*) · use more than one exclamation per screen · use idioms or culturally specific references (we localize into 50+ languages) · use the word *"dead"* — say *"passed away"* or simple past tense.

**Four principles, applied to every piece of copy:**

1. **Spark Curiosity** — open-ended, inviting language. Avoid closed declaratives that end the journey.
2. **Build Trust & Reassurance** — confident, transparent, specific with numbers. Never describe historical records as "new" — MyHeritage adds collections; it doesn't release new records.
3. **Make a Human Connection** — focus on real people, real families. Write like you speak. Limit "we" in product copy.
4. **Simplify Complexity** — easy to understand. Direct. **Always active voice.**

**Rules:**

- **Sentence case** for nearly everything — buttons, headings, menu items. Title Case only for proper nouns and product names ("DNA Matches", "Photo Enhancer", "Deep Nostalgia™"). Never ALL CAPS in body copy; uppercase is reserved for caps-class labels/badges.
- **Second person** ("you"). "We" only in support contexts. Speak _to_ the user, not _at_ them.
- **Specificity** — "You've added 100 people to your tree!" beats "Operation completed successfully."
- **Errors are reassuring, never blaming** — "We couldn't find a match yet — try adjusting your search." not "No results found."
- **Empty states** always offer guidance + a clear next step.
- **Jargon** — avoid unless it's standard genealogy terminology (GEDCOM, smart match, record match, theory of family relativity), and define it the first time it appears.
- **Numbers & dates** — allow partial dates (`abt. 1872`, `1850s`). Display per user locale. Names support patronymics, multiple surnames, honorifics, suffixes.
- **CTAs** — verb-first, outcome-focused: "View match", "Add to tree", "Start your trial".
- **Sensitivity** — DNA results, deceased relatives, colorized photos can be profoundly emotional. Always offer the user control: hide, dismiss, revisit on their own terms.

**Banned phrases (overused / generic):**

- "Discover your roots"
- "Uncover your story"
- "Your journey can begin" (passive — use "Get started")
- Exclamation marks in errors or warnings
- Placeholder text used as instructions (use visible, persistent labels)

**Vocabulary.** Use family/genealogy language, not tech language: **"family tree", "ancestors", "relatives", "matches"** — not "connections", "nodes", "users".

---

## Accessibility

- **WCAG 2.1 AA minimum.** Contrast 4.5:1 body / 3:1 large text + UI.
- **Touch targets ≥ 44×44.**
- **All icon-only buttons carry `aria-label`.**
- **RTL supported natively** (Hebrew/Arabic).
- **`prefers-reduced-motion` respected.**
- For text on tinted error/warning/success surfaces, use the `160`/`180` stops, not `100`/`140`.

---

## Do's and Don'ts

**Do:**

- **Include the Header and the Footer on every full-screen design.** Both are non-negotiable. Header has signed-in (default) / `Header Auth` (signed-out) / `SimpleHeader` variants. Footer has `--full` (marketing), `--lean` (second-tier marketing), `--default` (in-product, **the default for most app screens**), `--basic` (help / contact / error). Only skip them when the brief explicitly says no header / no footer.
- Reserve Amber primary for the single most important action on a white surface. Navy is not an accent — never paint a CTA on Navy.
- Use Scarlet160 / Apricot160 / Forest180 for body text on tinted error/warning/success surfaces.
- Map family-tree gender markers to Sapphire80 (Male) and Scarlet60 (Female).
- Map product accents consistently: Fuchsia (purple family) = DNA, Sapphire (blue family) = Health. Each is a `@mh-core/ThemeProvider` theme.
- Default body paragraph: `.mh-p2` (15/24).
- Use `--shadow-card` for cards, `--shadow-card-hover` for hover, `--shadow-modal` for modals.
- Include a footer on every full-screen design (variant per context).
- Apply sub-brand themes via `@mh-core/ThemeProvider` wrapping the relevant section / page subtree.
- Use logical CSS properties (`margin-inline-*`, `padding-inline-*`) so RTL works.

**Don't:**

- Don't use raw hex / raw px / manual font-size — bind to tokens. If a value doesn't exist, **pick the nearest**, don't invent.
- Don't put gradient backgrounds on UI surfaces. MyHeritage is flat-fill.
- Don't apply glassmorphism / backdrop-filter blur on content cards.
- Don't drop-shadow buttons. Shadows are for cards and overlays only.
- Don't full-width buttons on desktop — use `fit-content` or a max-width.
- Don't center body copy wider than 65ch.
- Don't combine border and shadow on the same card — pick one.
- Don't mix two greens (Emerald + Forest, or Forest + Pistachio) in one view.
- Don't use Bumblebee or Pistachio as CTA colors — contrast on white is too low.
- Don't borrow semantic colors (Scarlet, Apricot, Forest, Azure) for decoration. They have meaning.
- Don't borrow product accents (Fuchsia, Sapphire, Blueberry) for unrelated surfaces.
- Don't use `t1-display` as a real `<h1>` — it's decorative. Use `t4` (34px) as the semantic page heading.
- Don't skip `<h4>` in HTML markup just because the `t8` token visually matches.
- Don't use emoji in product UI. Brand expression is through illustration and photography.
- Don't say "Discover your roots" or "Uncover your story" — overused.
- Don't use exclamation marks in errors or warnings.
- Don't mix themes inside a single component or nest ThemeProvider scopes inside one another.
- Don't override token values locally — use the theme attribute only.

---

## Appendix — Component Library Inventory (kido Storybook)

This is the complete component taxonomy from the production **kido** Storybook export. Use these exact names when importing from `@mh-core` or `@mh-business`. Stories under `Core/*` and `Business/*` mirror these in Storybook navigation.

### Core primitives (`@mh-core`)

**Buttons**
- `@mh-core/Buttons/CloseButton`
- `@mh-core/Buttons/SpinnerButton`
- `Core/Buttons/Button` · `Core/Buttons/IconButton` · `Core/Buttons/Link` · `Core/Buttons/LinkButton`
- `Core/Buttons/ActionTrigger`
- `Core/Buttons/ButtonGroup` · `Core/Buttons/ButtonGroupItem` · `Core/Buttons/AdaptiveButtonGroup`
- `Core/Buttons/ButtonToggle` · `Core/Buttons/SwitchToggle` · `Core/Buttons/SwitchToggleControlled`

**Form**
- `@mh-core/Inputs/TextField` · `@mh-core/Inputs/CheckBox` · `@mh-core/Inputs/FileSelector`
- `@mh-core/Inputs/Calendar/CalendarInput` · `@mh-core/Inputs/Calendar/NativeCalendarInput`
- `Core/Form/TextInput` · `Core/Form/DatePicker` · `Core/Form/DatePicker/AdvancedDatePicker`
- `Core/Form/CalendarPicker(FormCalendarInput)` · `Core/Form/CheckBox/CheckBoxControl` · `Core/Form/CheckboxItemSelector`
- `Core/FormControls/FormControl` · `Core/FormControls/FormDropdownStyledField` · `Core/FormControls/RadioGroupControl`
- `Core/Inputs/RadioBase` · `Core/Inputs/RadioGroup` · `Core/Inputs/RadioGroupItem`
- `Core/Inputs/SearchField` · `Core/Inputs/StyledCheckbox` · `Core/Inputs/StyledRadio` · `Core/Inputs/StyledTextArea` · `Core/Inputs/StyledTextField`
- `Core/Styling/StyledField`
- `Core/GallerySelector(FixedGallery)`

**Overlays**
- `Core/Overlays/Modal` · `Core/Overlays/BasicModal` · `Core/Overlays/SideModal` · `Core/Overlays/SideModal/SideModalLayout`
- `Core/Overlays/ModalHeader` · `Core/Overlays/ModalContent` · `Core/Overlays/ModalActions` · `Core/Overlays/ModalFooter`
- `Core/Overlays/Drawer(SwipeablePanel)`
- `Core/Overlays/Tooltip`
- `Core/Overlays/Dropdowns/Dropdown` · `Core/Overlays/Dropdowns/DropdownMenu` (`+ DropdownMenuItem`, `FilterableDropdownMenuItem`)
- `Core/Overlays/Dropdowns/DropdownSelector` (`+ ActionBar`, `Item`, `ItemCheckbox`, `ItemRadio`, `Title`, `Tree (Single|Multi)`)
- `Core/Overlays/Dropdowns/DropdownTriggers/{Button | IconButton | ActionTrigger | SplitButton | StyledField | StyledTextField | Custom}`
- `Core/Overlays/Dropdowns/Internal/{DropdownHeader | DropdownItemBase}`

**Layout & Navigation**
- `@mh-core/Layouts/ColumnsLayout` · `LeanTooltipLayout` · `TooltipLayout`
- `@mh-core/Layouts/Tables/Table` · `Core/Table`
- `@mh-core/Layouts/Toolbars/Toolbar`
- `@mh-core/Navigation/Breadcrumbs` · `@mh-core/Navigation/Tabs`
- `Core/Layouts/Carousel`
- `Core/Sticky`
- `Core/Pagination/StepProgressBar`

**Notifications / Feedback**
- `Core/Notifications/NotificationStrip(Strip)`
- `Core/Notifications/Toaster` · `Core/Notifications/Toaster/ToasterLayout`
- `Core/Tags/IndicationTag (Tag)` · `Core/Tags/IndicationTag (Tag)/ErrorTag` · `Core/Tags/IndicationTag (Tag)/NewTag`
- `Core/Tags/InteractiveTag`

**Cards / Containers**
- `Core/Cards/Card`

**Chat**
- `Core/Chat/ChatBubble` · `Core/Chat/MediaBubble` · `Core/Chat/TypingBubble`

**Sliders**
- `Core/Sliders/Slider` · `Core/Sliders/DiscreteSlider` · `Core/Sliders/Splitter`

**Profile / Media**
- `Core/ProfilePhoto` · `Core/ProfilePhoto/EditableProfilePhoto` · `Core/ProfilePhoto/GatheredProfilePhotos` · `Core/ProfilePhoto/ProfilePhotosRow`
- `Core/Players/VideoPlayer`
- `Core/ProgressCircle`

**Animations**
- `@mh-core/Animations/Spinner` · `SpinnerContainer` · `Slideshow` · `HeightTransition`

**Shapes / Utilities**
- `@mh-core/Shapes/Circle` · `@mh-core/Shapes/RepeatedDots`
- `Core/BulletList`
- `Core/Dom/ThemedPortal`
- `@mh-core/Information/{ColoredBar | HelperText | ResizableTitle | StepsDescription}`
- `@mh-core/Styling/DynamicStyling`
- `@mh-core/ThemeProvider` ← **apply theme overrides via this provider**, not via `data-theme` attribute
- `@mh-core/Wizards/AccordionWizard` · `BasicWizard`

### Business composites (`@mh-business`)

- **Accordion family:** `Accordion` · `Collapsible` · `CollapsibleGroup` · `ExpandableList` · `StickyCollapsible` · `TrailedCollapsibleParagraph`
- **FAQ:** `FaqSection`
- **Form controls:** `Calendar/AdaptiveFormCalendarInput` · `Calendar/NativeFormCalendarInput` · `FormFileSelector` · `FormTextArea` · `PasswordInput`
- **Inputs:** `ActivationCodeField` · `SearchFormField` · `Inputs/UploadArea`
- **Layouts:** `Cards/CardCallToAction` · `Cards/CardCallToActionList` · `Gallery` · `UploadAreaLayout`
- **Profile:** `ProfileDetails` · `ProfileNode`
- **Social:** `ShareButtons`
- **Tabs:** `DockedTabs` · `NativeDockedTabs`
- **Chat:** `Chat/ChatContainer` · `Chat/ChatTextMessage` · `Inputs/ChatInput` · `Inputs/SuggestionsChatInput`
- **Genealogy:** `Business/Genealogy/RecordCard` · `Business/IndividualDetails`
- **Navigation:** `Business/Navigation/SimpleHeader`
- **Other:** `Business/FullScreenView` · `Business/Testimonials`

### Design pages in Storybook

Open these in the kido Storybook for the canonical token visualizations:

- `Design/Colors/Palette` (`+ Themes` story)
- `Design/Colors/Color support guide`
- `Design/Colors/Components color migration`
- `Design/Constants`
- `Design/Spaces`
- `Design/Themes`
- `Design/Typography` (`+ Heading`, `Label`, `Note`, `Paragraph` sub-components)

