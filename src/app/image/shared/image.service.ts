import { Injectable } from '@angular/core'

@Injectable()

export class ImageService{
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id);
	}	
}

const IMAGES = [
	{"id": 1, "category": "human", caption:"people in a meeting", "url":"assets/images/_ (1).jpg"},
	{"id": 2, "category": "human", caption:"Silhoutte", "url":"assets/images/_ (2).jpg"},
	{"id": 3, "category": "human", caption:"bike racing", "url":"assets/images/_ (3).JPG"},
	{"id": 4, "category": "human", caption:"1940s", "url":"assets/images/_ (4).jpg"},
	{"id": 5, "category": "human", caption:"A girl", "url":"assets/images/_ (5).JPG"},
	{"id": 6, "category": "flower", caption:"Purple Flowers", "url":"assets/images/_ (6).JPG"}
]