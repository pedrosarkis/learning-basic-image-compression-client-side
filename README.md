Don't care about the UI, the main goal was to test image compression. 

![image](https://user-images.githubusercontent.com/22531754/195460332-a250aadb-ed81-49be-8db8-01fd66896c96.png)

Here my original image has something about 100,5 kb.

When the button "Upload normal size" is clicked, the image is just converted to base64, which confirms that this conversion increase the file size by more than 25%. 

![image](https://user-images.githubusercontent.com/22531754/195460497-dcf410b3-493a-4168-b52e-371ba084ff44.png)

Original File size : 100.06

Base64 size: 133.44 

Result = 33% bigger.

https://bunny.net/blog/why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea/#:~:text=Although%20Base64%20is%20a%20relatively,also%20increases%20the%20download%20time.

When the button "Upload compressed is clicked", a temporary canvas element is created, to redrawn the image with an expected quality loss, in this project the quality loss is 50%. 

![image](https://user-images.githubusercontent.com/22531754/195460787-0a8f436b-4871-4cde-93e0-b129dfaee2a2.png)

Original File size: 100.06 

Base64 size: 48.05 

Result : 50% smaller. 

PS: Obviously the image quality is also smaller, the goal here is just to learn how to compress file when needed.

