const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
        ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${imagePath}`
        : '/no-image-placeholder.png'
}

export default getImagePath