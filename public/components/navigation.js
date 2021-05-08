class Navigation{
    constructor(links, pages) {
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }
    
    getLinks() {
        console.log(this.links);
    }

    setPage(pageId){
        this.currentPage = pageId;
        console.log(this.currentPage);

        this.links.forEach((link) => {
            link.classList.remove('active');
            if (this.getHash(link) === pageId) {
                link.classList.add('active');
            }
        })

    }
    getHash(link){
        return link.href.split("#")[1];
    }

}

export default Navigation;