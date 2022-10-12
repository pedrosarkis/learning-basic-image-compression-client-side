function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

const encodeImageFileAsURL = () => {
    const [file] = document.getElementById('image').files;
    let reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('imageDisplay').src = reader.result;
        document.getElementById('fileSize').innerHTML = `File original size: ${formatBytes(file.size)}`;
        document.getElementById('base64Size').innerHTML = `Base64 size: ${reader.result.length / 1024} KB`;
    }
    reader.readAsDataURL(file);
}

document.getElementById('normalSize').addEventListener('click', encodeImageFileAsURL);


const convertFileDirectlyToBlob = () => {
   
    const [file] = document.getElementById('image').files;
    const blob = URL.createObjectURL(file);
    const img = new Image();
    img.src = blob;
    img.onload = function () {
        const canvas = document.createElement('canvas');

        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function (blob) {
            document.getElementById('imageDisplay').src = URL.createObjectURL(blob);
            document.getElementById('fileSize').innerHTML = `File original size: ${formatBytes(file.size)}`;
            document.getElementById('base64Size').innerHTML = `Base64 size: ${blob.size / 1024} KB`;
        }, 'image/jpeg', 0.5);
    }

    // reader.onloadend = function () {
    //     // const blob = new Blob([reader.result], { type: file.type });
    //     // const blobUrl = URL.createObjectURL(blob);
    //     const image = new Image();
    //     image.src = reader.result;
    //     image.onload = () => {
    //         //compress image with canvas
            
    //         const canvas = document.createElement('canvas');
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         const ctx = canvas.getContext('2d');
            
    //         ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    //         debugger;
    //         const compressedImage = canvas.toDataURL(file.type, 1.0);
    //         document.getElementById('imageDisplay').src = compressedImage;
    //     }
    // }
    //reader.readAsDataURL(file);
}

//porções de testes que não funcionaram





// pega a imagem e joga num elemento canvas, onde é possível fazer compressão
// function resizeMe(img, max_width, max_height) {

//     let canvas = document.createElement('canvas');

//     let width = img.width;
//     let height = img.height;


//     if (width > height) {
//         if (width > max_width) {
//             //height *= max_width / width;
//             height = Math.round(height *= max_width / width);
//             width = max_width;
//         }
//     } else {
//         if (height > max_height) {
//             width = Math.round(width *= max_height / height);
//             height = max_height;
//         }
//     }

//     canvas.width = width;
//     canvas.height = height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, width, height);

//     preview.appendChild(canvas);

//     return canvas.toDataURL("image/jpeg", 0.7); // compressão de 30%

// }


document.getElementById('compressedSize').addEventListener('click', readFileAsArrayBuffer);

