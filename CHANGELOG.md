### 12.13.19

- **[11:38 AM]** _v1.0.0_ - Fixing Adobe input open file dialog
- **[11:24 AM]** _v1.0.0_ - Clearing default values for Output path
- **[11:24 AM]** _v1.0.0_ - Testing file input directly### 12.12.19

- **[09:03 PM]** _v1.0.0_ - Creating ZXP for 1.0.0
- **[09:03 PM]** _v1.0.0_ - Adding download button indicator
- **[09:02 PM]** _v1.0.0_ - Updating fake-spy version
- **[08:27 PM]** _v1.0.0_ - Tweaking various UX aspects and matching between browser and adobe
- **[08:27 PM]** _v1.0.0_ - Putting reset settings inside settings page
- **[07:48 PM]** _v1.0.0_ - Adding zipName function and original file name of dropped item to vuex w/ browser output
- **[07:05 PM]** _v1.0.0_ - Adding loading status for download button during zip creation and download
- **[07:04 PM]** _v1.0.0_ - Re-enabling disabled status for browser toggle
- **[06:53 PM]** _v1.0.0_ - Setting browser output toggles as enabled and v-models
- **[06:47 PM]** _v1.0.0_ - Fixing browser download
- **[11:33 AM]** _v1.0.0_ - JSZip reports origin is blocked in generateAsync method
- **[11:29 AM]** _v1.0.0_ - Adding JSZip test in production build only when not in localhost### 12.11.19

- **[09:48 PM]** _v1.0.0_ - Various small UX tweaks to ensure smoother aesthetic and prevent visual glitches
- **[09:47 PM]** _v1.0.0_ - Locking render progressbar to throttle count to prevent values over 100
- **[09:46 PM]** _v1.0.0_ - Refactoring renderer code to single worker
- **[09:28 PM]** _v1.0.0_ - Fixing text appearing before vuex states are loaded in input tags and subtags
- **[09:28 PM]** _v1.0.0_ - Creating settings module for user to turn off all zoom and slide transitions
- **[09:09 PM]** _v1.0.0_ - Creating slide transitions for main pages
- **[08:34 PM]** _v1.0.0_ - Reconfiguring logman to include package version inside changelog statements
- **[08:19 PM]** _v1.0.0_ - Scoping main lottie style and making mini lotties fully responsive in size
- **[07:38 PM]** _v1.0.0_ - Creating modular component for toolbar extra route buttons
- **[07:38 PM]** _v1.0.0_ - Changing file count badge on MiniPreview input component
- **[07:23 PM]** _v1.0.0_ - Fixing vuex getter for settings missing in RenderDialog
- **[07:23 PM]** _v1.0.0_ - Allowing toolbar extra buttons to switch routes if clicked while active
- **[07:23 PM]** _v1.0.0_ - Fixing cluecumber relying on CEP-spy
- **[06:57 PM]** _v1.0.0_ - Removing render button in toolbar### 12.10.19

- **[10:40 PM]** _v1.0.0_ - Finalizing preview screen and making aesthetic changes to slottie minis
- **[09:15 PM]** _v1.0.0_ - Creating custom npm run convert script to handle panelify switch
- **[08:43 PM]** _v1.0.0_ - Cleaning up Panel layout and compartmentalizing to components
- **[08:30 PM]** _v1.0.0_ - Adding Throttling as a toggle feature
- **[08:30 PM]** _v1.0.0_ - Validating outpath and newBatchFolder
- **[08:29 PM]** _v1.0.0_ - Creating Output component menu and attaching all to new Vuex store modules
- **[07:19 PM]** _v1.0.0_ - Creating AdobeRenderer page and components
- **[06:23 PM]** _v1.0.0_ - Changing linear progress to circular component
- **[06:23 PM]** _v1.0.0_ - Attempting to use jszip but need to verify in production
- **[05:40 PM]** _v1.0.0_ - Manually stripping matching asset.layers on direct match to fix nested head issue
### 12.09.19

- **[09:42 PM]** _v1.0.0_ - Need to reimplement recursion to fix deeply nested head issue
- **[09:40 PM]** _v1.0.0_ - Performing 1536 benchmark and noting that heads are incorrect
- **[08:58 PM]** _v1.0.0_ - Creating basic preview grid of 6 random entries
- **[08:32 PM]** _v1.0.0_ - Researching transferrable objects but unable to use them here as we need pure Objects and not typed Arrays
- **[08:15 PM]** _v1.0.0_ - Debugging and fixing SyntaxError Invalid RegExp Stack Overflow issue with dynamic RegExp
- **[08:13 PM]** _v1.0.0_ - Removing async await and researching alternative deep clone methods
- **[08:13 PM]** _v1.0.0_ - Cleaning up Web Worker code and adding annotation
- **[08:13 PM]** _v1.0.0_ - Creating Web Worker renderer for all combinations passing 1536 benchmark
### 12.08.19

- **[10:19 PM]** _v1.0.0_ - Debugging recursion fail and attempting alternate methods
- **[09:17 PM]** _v1.0.0_ - Documenting nuances to exportSingleBrowser
- **[08:31 PM]** _v1.0.0_ - Confirming single render logic and combining old hitlist and render functions into a single export function
- **[08:10 PM]** _v1.0.0_ - Rewriting single render as async and recursive
- **[08:09 PM]** _v1.0.0_ - Reconfiguring input and output vuex retreival
- **[07:12 PM]** _v1.0.0_ - Adding route lock in Palette if activeLottie is deleted to redirect back to Input page
- **[07:08 PM]** _v1.0.0_ - Correcting vuex reset states for input and output renders
- **[06:39 PM]** _v1.0.0_ - Creating vuex for output and linear progress state
- **[06:39 PM]** _v1.0.0_ - Creating rendering dialog
- **[05:52 PM]** _v1.0.0_ - Created dialog to prompt user and overriding update button when download occurs
- **[05:52 PM]** _v1.0.0_ - Download mechanic for web and adobe
- **[04:47 PM]** _v1.0.0_ - Creating buttons at footer for github homepage and issues
- **[04:12 PM]** _v1.0.0_ - Creating hideUnusedTags vuex state and settings option
- **[04:03 PM]** _v1.0.0_ - Creating output router lock to push user back to input upon changes
- **[03:36 PM]** _v1.0.0_ - Creating settings item numeric input component and linking to base unit
- **[03:10 PM]** _v1.0.0_ - Creating settings item checkbox and linking General and Color vuex
- **[02:58 PM]** _v1.0.0_ - Creating dynamic settings item component
- **[02:51 PM]** _v1.0.0_ - Creating initial Settings page
- **[01:38 PM]** _v1.0.0_ - Placeholders for wiki tab panels
- **[01:37 PM]** _v1.0.0_ - Adding extra route title name in toolbar
- **[01:33 PM]** _v1.0.0_ - Adding sorted list poppin badge to all palette tabs
- **[01:29 PM]** _v1.0.0_ - Removing poppin badge on palette when route is active
- **[01:28 PM]** _v1.0.0_ - Setting toolbar extra routes as having primary color when active
- **[01:28 PM]** _v1.0.0_ - Creating initial wiki page with tabbed navigation
- **[01:08 PM]** _v1.0.0_ - Creating palette options component and modules in vuex store
- **[12:23 PM]** _v1.0.0_ - Finishing initial styling on palette list items
- **[11:55 AM]** _v1.0.0_ - Splitting palette into components
### 12.07.19

- **[11:23 PM]** _v1.0.0_ - Compartmentalizing palette into separate components using props for data flow
- **[11:13 PM]** _v1.0.0_ - Initial list item styling and logic
- **[11:13 PM]** _v1.0.0_ - Dynamic color tab and basic list creation in palette route
- **[10:22 PM]** _v1.0.0_ - Document nuances within color getting and update code comments and annotation
- **[10:15 PM]** _v1.0.0_ - Verified that palette colorByTag collects all correctly
- **[10:15 PM]** _v1.0.0_ - Fixed backdoor for nested assets within color scan
- **[09:52 PM]** _v1.0.0_ - Documenting asset depth at 0 error in colorList stack
- **[09:52 PM]** _v1.0.0_ - Creating base palette menu
- **[09:33 PM]** _v1.0.0_ - Creating colorList in render vuex
- **[09:31 PM]** _v1.0.0_ - Fixing palette route locked when no colorCount
- **[09:19 PM]** _v1.0.0_ - Verifying setNewColors results treatedLottie looks to be correctly inheriting classes/names
- **[09:18 PM]** _v1.0.0_ - Creating set/get/clear methods for input.treatedLottie
- **[09:18 PM]** _v1.0.0_ - Creating new reset for treatedLottie saving to vuex so computation is only done when needed
- **[09:10 PM]** _v1.0.0_ - Porting setNewColors and assigning treated Lottie instance for color scanning/assignment
- **[08:31 PM]** _v1.0.0_ - Verifying changelog is uniform
- **[08:27 PM]** _v1.0.0_ - Installing new changelog version
- **[08:24 PM]** _v1.0.0_ - Fixing Tags/Subtags components for new vuex module
- **[08:24 PM]** _v1.0.0_ - Adding poppin + badge for file count, setting during Combination Array set
- **[08:01 PM]** _v1.0.0_ - Rewrite store functions to add fileCount and combination arrays
- **[07:44 PM]** _v1.0.0_ - Flushed old vuex states, successfully separated store modules
### 12.05.19

- **[07:17 PM]** _v1.0.0_ - Creating reset states and flushing store data
- **[07:11 PM]** _v1.0.0_ - Reconfiguring pages and components to grab from the correct state
- **[07:11 PM]** _v1.0.0_ - Dividing stores into settings and input
### 12.02.19

- **[11:10 PM]** _v1.0.0_ - Removing tag/subtag labels
- **[11:05 PM]** _v1.0.0_ - Custom Poppin transition component wrapping badges, preview and tag chips
- **[10:54 PM]** _v1.0.0_ - Adding route badges to tabs on toolbar
- **[10:30 PM]** _v1.0.0_ - Locked routing for palette when colorScan is false
- **[10:29 PM]** _v1.0.0_ - Color count vuex variable and badge on toolbar for palette
- **[10:02 PM]** _v1.0.0_ - Creating backdoor for all assets, color scanning at 100% support
- **[09:54 PM]** _v1.0.0_ - Documenting asset rendering discrepency
- **[09:54 PM]** _v1.0.0_ - Reconfiguring color scanning for get/set with new config objects
- **[09:24 PM]** _v1.0.0_ - Adding store and config variables for color scanning
- **[08:55 PM]** _v1.0.0_ - Detailed message dialog for all file drop error handling
- **[08:20 PM]** _v1.0.0_ - Adding gear indicators, working with drag chain to resolve delay
- **[07:52 PM]** _v1.0.0_ - Complete config reset in vuex complete, fixing lottie chaining bugs
- **[07:31 PM]** _v1.0.0_ - Moving pull-to-refresh to layout pages instead of per page
- **[07:25 PM]** _v1.0.0_ - Moving refreshActiveLottie to root app
- **[07:20 PM]** _v1.0.0_ - Adding logic for dynamic lottie file refresh, rechaining
- **[07:20 PM]** _v1.0.0_ - Renaming subtags to subTags and ignoretags to ignoreTags, bubbling up in store
- **[06:43 PM]** _v1.0.0_ - Adding colorscan as a variable to store
- **[06:43 PM]** _v1.0.0_ - Cleaning up console statements
- **[06:43 PM]** _v1.0.0_ - Removing unused dev-dependencies
- **[06:36 PM]** _v1.0.0_ - Removing unused dev-dependencies
- **[06:31 PM]** _v1.0.0_ - Finalizing 12.01 log
- **[06:24 PM]** _v1.0.0_ - Publishing logman and reconfiguring yesterday's changelog
- **[06:24 PM]** _v1.0.0_ - File/folder creation, list creation, chronological sorting
- **[06:23 PM]** _v1.0.0_ - Git repo and npm package for logman
- **[06:23 PM]** _v1.0.0_ - Creation of basic changelog tool
### 12.01.2019

- **[11:01 PM]** _v1.0.0_ - Transitions for subtags and wrapper
- **[10:44 PM]** _v1.0.0_ - CRUD actions for subtag wrapper
- **[09:13 PM]** _v1.0.0_ - State and selection for subtags
- **[08:22 PM]** _v1.0.0_ - Functionality for subtag vuex binding
- **[07:50 PM]** _v1.0.0_ - Subtag modal prompt and wrapper
- **[07:36 PM]** _v1.0.0_ - Custom HTML element for all subtags
- **[07:30 PM]** _v1.0.0_ - Active tag styling and transitions
- **[07:25 PM]** _v1.0.0_ - Hooked up activeTagList component to vuex
- **[07:20 PM]** _v1.0.0_ - Reconfigured `constructTags` to work in new panel
- **[06:49 PM]** _v1.0.0_ - Panelify demo live at https://inventsable-panels.web.app/lunchMama
- **[06:44 PM]** _v1.0.0_ - Continuous deployment to https://hardcore-easley-0fd66d.netlify.com/#/ successful
- **[06:37 PM]** _v1.0.0_ - Deployment setup
- **[06:07 PM]** _v1.0.0_ - Locked routing in toolbar
- **[06:03 PM]** _v1.0.0_ - Mock subtag list
- **[06:01 PM]** _v1.0.0_ - Mock tag list
- **[05:50 PM]** _v1.0.0_ - New drag/drop component and file input
- **[05:32 PM]** _v1.0.0_ - Barebones template for Input
- **[05:30 PM]** _v1.0.0_ - Mock routes for all pages
- **[05:16 PM]** _v1.0.0_ - Mock footer with panel version
- **[05:10 PM]** _v1.0.0_ - Mock toolbar with route-tabs
- **[05:02 PM]** _v1.0.0_ - Vuex equivalents for all previous in-app and LocalStorage data
- **[04:50 PM]** _v1.0.0_ - Ensuring panel is web friendly for panelify, backdoors for starlette/cep-spy, app identity and quasar.config.js
- **[04:27 PM]** _v1.0.0_ - Added dynamic starlette routing
- **[04:23 PM]** _v1.0.0_ - Added dynamic cep-spy routing
- **[04:19 PM]** _v1.0.0_ - Created base panel with bombino Quasar-Slim defaults
