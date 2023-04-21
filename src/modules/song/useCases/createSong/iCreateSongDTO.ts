export interface IRequest {
    name: string;
    artist: string;
    imageurl: string;
    notes: string;
    popularity: string
  }

export interface IResponse {
    id: string;
    name: string;
    artist: string;
    imageurl: string;
    notes: string;
    popularity: string
    createdAt: Date;
    updatedAt: Date;
}    
    
    
  