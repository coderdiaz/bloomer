# Bloomer Changelog

## 0.5.5 - 2017-06-10
### Changed
- `Level` now can be a `div` (default) or an `anchor` if has `href` prop.

## 0.5.4 - 2017-06-09
### Changed
- `Tile` now has `render` prop.
- `Image` now has wrappers rendered, so you should use `src` prop to use it.

## 0.5.4 - 2017-06-08
### Changed
- Add `isAlign` options to `Pagination`, `Tabs` , so Intellisense can be used on those components for that prop.

## 0.5.3 - 2017-06-07
### Changed
- Fix `Icon` component. Was passing `isSize` prop to rendered element causing annoyung console warning.
— Removed unnecessary imports on components.

## 0.5.2 - 2017-06-06
### Changed
- Fix name for UMD library to `Bloomer`
- Remove Type specific for some funcions on helper file (getHTMLProps and combineModifiers).

## 0.5.1 - 2017-06-05
### Changed
- Rename `SubTitle` for `Subtitle` -> Annoying typo

### Fixed
- `NavRight` was passing `isMenu` as prop when rendered, causing annoying `console.error`.

## 0.5.0 - 2017-06-05
### Added
- Bulma Sizes to Button Component (small, medium, large)
- Refactor Bulma.State interface to split Active, Focused and Hovered.
- Refactor isLeft|isRight|isCenter|isCentered to `isAlign` with desired alignment (left, right, center, centered) as string.
- Add `isAlign` to `TabList` component.
- Refactor colors props (e.g. isWhite), to `isColor` with desired color as string (e.g. `isColor='white'`)
- Reduce Props to be more similar with last API change:
    - Field
        - Now you only need `isGrouped` and `hasAddons`
    - Control
        - Now you only need `hasIcons`
    - Image
        - Now you only need `isSize` and `isRatio`
    
### Breaking
- Removed shortcuts on helpers (for example, you should write 'mobile' instead of 'm') to be more expresive with the API.
- Refactor Bulma.Size to use only one prop `isSize` with desired size (small, medium, large) as string 

## 0.4.1 - 2017-06-02
### Breaking
- Changed Helper `hasAlignedText` to `hasText` to be more similar with Bulma modifier.

## 0.4.0 - 2017-05-31
### Added
- withHelpersModifiers HOC was added to index, so everyone can extend their components with Bulma helpers
- HeroVideo Component
- hasAlignedText and hasColor Helper Modifiers
### Breaking
- API for Column, Title, Subtitle and HelpersModifiers (rensponsive helpers) where changed, so less props are used.

## 0.3.0 - 2017-05-29
### Added
- All Bulma/Components.
- This is the first release with all Bulma Components (components/elements/grid/layout).

## 0.2.5 - 2017-05-28
### Added
- This changelog.
- All Elements Components.

## 0.2.4 - 2017-05-28
### Added
- All Helpers Modifiers.

## 0.2.3 - 2017-05-25
### Added
- All Grid Components.

## 0.2.2 - 2017-05-23
### Added
- All Layout Components.

### Removed
- classNames wrapper removed since this was iterating trough all modifiers. Instead we use get*Modifiers functions with combineModifiers, so the library iterate only to possible modifiers.

## 0.0.1 - 2017-05-04
### Added
- Components: Box, Tabs, Pagination.