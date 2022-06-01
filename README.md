# Scroll Text
An extremely simple web app to broadcast messages via your computer screen. It makes your message absolutely massive (so your recipient can read it) and scrolls it across the screen. This project is just a bit of fun, I will not be updating it.
## Features 
1. Change the text
2. Change the colour
3. Sync two computers so that the text scrolls across both. To do this, click the copy link button and share it with your friend. 
## How the sync works
I'm quite proud of this (hence this section). The sync feature requires both computers to have a clock that is reasonably in-sync. Any delay over 100ms will look bad. This is because of how the sync feature works. The sync feature works by answering this question before it begins scrolling:
> How much time would there be until the scrolling repeats if a hypothetical computer had been scrolling this text since the dawn of Unix time.
Then, we simply wait that amount of time to start the scrolling. The answer to this question should be exactly the same across computers, providing that their clocks are in sync.
This does not completely solve our problem however. The text is in time, but it does not scroll from one screen to the other. To solve this, we need to add the  amount of time it takes for the first column of pixels to scroll across the screen on the first computer to our former delay. This final amount of delay will only be used on our second computer, hence why you must use the copy link button to only encode this piece of information in the url used by the second computer. To find the time for first column of pixels to scroll the screen, divide the viewport width in pixels by the text box width in pixels and multiply it by the amount of time it takes the entire string of text to scroll across the screen. 
Once all this computation is complete, and the computer waits the delay that we just figured, the text will begin scrolling on our second computer.
![A screenshot of my app](https://raw.githubusercontent.com/will-lol/scrolltext/master/assets/screenshot/anim.webp)