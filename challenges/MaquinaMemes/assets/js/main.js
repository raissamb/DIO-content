// Function to provide default imgs
async function mapImageList() {
    const memesObject = [
        {
            "name": "chloe",
            "path": "/assets/img/chloe.jpg"
        },
        {
            "name": "chapolin",
            "path": "/assets/img/chapolincolorado.jpg"
        }
    ]
    return memesObject
}


// Function to enable user to upload a image file
function enablePhotoUpload() {
    //const imageInput = document.querySelector("#image-input")
    const imageInput = document.getElementById("image-input")

    imageInput.addEventListener("change", function () {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
            //document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
            // function  changeMemePicture does this now
        })
        reader.readAsDataURL(this.files[0])
    })
}


// Function to create a gallery
async function createGallery(imageList) {
    //const memeSelector = document.querySelector("#memes-list")
    const memeSelector = document.getElementById("memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}


// Function to change meme img
async function changeMemePicture(photo) {
    //let displayImage = document.querySelector("#display-image")
    let displayImage = document.getElementById("display-image")
    displayImage.style.backgroundImage = `url('${photo}')`

}


// Main function to execute all the necessary steps
async function main() {
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}


// Function to download meme using html2canvas
// html2canvas: Screenshots with JavaScript, https://html2canvas.hertzen.com/
function downloadMeme() {
    const downloadBtn = document.getElementById('btn-download')
    downloadBtn.addEventListener('click', () => {
        const screenshotPrint = document.getElementById("app-download-meme")

        html2canvas(screenshotPrint).then((canvas) => {
            const base64Image = canvas.toDataURL("image/png")
            let anchor = document.createElement("a")
            anchor.setAttribute("href", base64Image)
            anchor.setAttribute("download", "my-meme.png")
            anchor.click()
            anchor.remove()
        })
    })
}

main()
