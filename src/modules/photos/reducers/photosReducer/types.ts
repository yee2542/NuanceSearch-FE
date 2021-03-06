import { PayloadAction } from '@reduxjs/toolkit';
import { PhotosAPI } from 'Modules/photos/constants/photo/interface';
import { Album } from 'Modules/photos/models/album';
import { Photo } from 'Modules/photos/models/photo';
import { GroupThumbnailPhotos, ThumbnailPhoto } from 'Modules/photos/models/thumbnail';
import { ErrorState } from 'Stores/common/types/error';

export const PHOTOS = 'PHOTOS';

export type PhotoState = {
  data: {
    photos: Array<PhotosAPI & { _id: string }>;
    albums: Album[];
    ready: boolean;
  };
  presentation: {
    thumbnail?: ThumbnailPhoto[];
    thumbnailGroup?: GroupThumbnailPhotos[];
    views?: {
      photo: Photo;
      album?: Album;
    };
  };
  error?: ErrorState;
};

export type SelectedPhotoPayload = PayloadAction<{
  photoId: Photo['_id'];
  albumId: Album['_id'];
}>;
