document.querySelector("#search-input").addEventListener('input',searchFunction)
const apiKey="563492ad6f91700001000001aac3e0db433b41acad2b36dc3b9b957e"
const noPhoto = document.querySelector("#no_photo")
const loading = document.querySelector("#loading")
const imageContainer = document.querySelector("#display")

function searchFunction() {
    const search= document.querySelector("#search-input")
    const inputs= search.value
    if(inputs.length >= 1){
        noPhoto.style.visibility="hidden"
        loading.innerHTML="Loading..."
        setTimeout(() => {
            loading.style.visibility="hidden"
        }, 1000);
    }
     axios.get(`https://api.pexels.com/v1/search?query=${inputs}`,{
    headers:{
        'Authorization': apiKey
    }
}).then(res=>{
    
    console.log(res.data.photos)
     const allPhotos=res.data.photos
    //  console.log(allPhotos.length)
     if(allPhotos.length === 0){
        console.log(noPhoto) 
        noPhoto.style.visibility="visible"
        
     }else{
     allPhotos.map(item=>{
         imageContainer.innerHTML+=`
         <div class="image-container">
         <img src=${item.src.original} alt=${item.alt}>
         <div class="content">
         <p class="fw-bold">Photographer</p>
         <p>${item.photographer}</p>
     </div>
 </div>
         `
         console.log(item)
     }
        )
    }

    // const [photos,]

}).catch(err=>{
    noPhoto.innerHTML="No photos!"
   
    console.log(err)
})
    console.log(inputs)
}

searchFunction()
