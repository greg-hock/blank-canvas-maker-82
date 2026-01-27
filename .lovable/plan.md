
# Plan: Darken the Orange Button Color

## Overview
Change the orange accent color from the current bright `#F97316` to a darker shade for a more sophisticated look.

## Color Change
**From:** `#F97316` (bright orange-500)
**To:** `#EA580C` (rich orange-600) - a slightly darker, more refined orange

This maintains good contrast and visibility while giving a more professional, less "loud" appearance.

## Files to Update

### 1. tailwind.config.ts
Update the `launch.orange` color definition from `#F97316` to `#EA580C`

### 2. src/index.css
Update the `.fancy-border` gradient which uses hardcoded RGB values:
- Change `rgba(249, 115, 22, 0.5)` to `rgba(234, 88, 12, 0.5)`
- Change `rgba(249, 115, 22, 0.8)` to `rgba(234, 88, 12, 0.8)`

## Additional Fix
There's also a build error in `src/pages/Pricing.tsx` that needs to be fixed - a missing `email` parameter in a function call. This will be addressed as part of the implementation.

## Impact
All buttons and elements using `bg-launch-orange`, `text-launch-orange`, `border-launch-orange`, and the fancy border gradients will automatically use the new darker shade.
