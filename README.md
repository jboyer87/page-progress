# Page-Progress

_Because some pages are **long!**_

**Page Progress** is a simple jQuery reading progress line. When included on a page, a progress bar will appear along the edge of the browser window to let the reader know how far they have progressed through a page.

## Features

**Save your place** -- A `.ppBookmark` element can be used to save a user's place. When the bookmark link is clicked, progress is calculated in pixels and the URL is updated to include the offset in pixels from the top of the page. When progress is saved, and a page is bookmarked, or linked to, **Page Progress** inserts a hash value into the URL and upon loading will automatically scroll to that point. Give it a try by opening [this page in a new window](index.html#500).

## Usage

To use Page Progress, include **jQuery**, **dotimeout.min.js** [[Credit](http://benalman.com/projects/jquery-dotimeout-plugin/)], **page-progress.min.js**, and **page-progress.min.css** on your page, and you're ready to go.

### Customization

Customize the **page-progress.css** file to change the look and feel of the progress bar:

*   `.ppProgressBarContainer` is the container for the progress bar:
    *   The background for the unfilled portion of the progress bar is a transparent gray by default -- Change the `background-color` property to adjust.
    *   The height is set to `1em` by default. Change `height` to adjust.
    *   Page Progress attaches to the top of the browser window. Change the `top` property to `bottom` to adjust. Change the value for `top` or `bottom` to use an offset for compatibility with floating/sticky headers.

*   `.ppProgressBar` is the actual progress bar itself:
    *   Modify the `background-color` property to change the color of the progress bar.
    *   The `min-width` property can be altered to change the smallest possible width of the progress bar.
    *   Change the `height` value to adjust the progress bar's height. This should correspond with the `height` property for `.ppProgressBarContainer`.
    *   `width` is set to allow for an animation on page load. Remove the `width` and `min-width` properties to get rid of this.

*   `.ppToast` is an optional floating toast notification that fires when a `.ppBookmark` element has been clicked:
    *   Modify the `background-color` property to change the color of the toast notification.
    *   Change the appearance and position by modifiying the values for `border-radius`, `padding`, and `position`. `display` should be left as `none` for the fade in/out to function properly.

### Configuration

Modify the page-progress.js file to turn the bookmark function on or off:

*   Simply remove lines that are clearly marked within the `Bookmark function` comment blocks.