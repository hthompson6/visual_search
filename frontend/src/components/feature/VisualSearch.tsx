import { useState } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop'

import "../../index.css";
import 'react-image-crop/dist/ReactCrop.css';



export function VisualSearch() {

    const [crop, setCrop] = useState<Crop>()

    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="w-1/4 flex-none">
                        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Chamomile%40original_size.jpg" />
                        </ReactCrop>
                </div>
                <div className="w-3/4 flex-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <img className="h-auto max-w-full rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Aster_Tataricus.JPG" />
                            <img className="h-auto max-w-full rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Krokus-kih.jpg/1280px-Krokus-kih.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};