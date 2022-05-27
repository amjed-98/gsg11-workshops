import { log, select, createElement } from './domFrameWork.js';

const $input = select('input');
const $form = select('form');
const $images = select('.images');
const body = select('body');
const req = new XMLHttpRequest();

window.onload = () => {
    sendReqOnChange();
    sendReq();
};

const sendReqOnChange = (searchTerm) => {
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendReq();
    });
};

const sendReq = () => {
    const searchTerm = $input.value;
    const url = `https://api.giphy.com/v1/stickers/search?api_key=itjfsiZL5K3dqTpEOhT766QJGgDCKonc&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`;

    req.open('GET', url);

    req.send();

    req.onload = () => {
        if (req.status !== 200)
            throw new Error(`error ${req.status}: ${req.statusText}`);

        const response = JSON.parse(req.response);

        console.log(response);
        $images.innerHTML = response.data.map((el) => {
            const {
                images: { original: url },
            } = el;

            const img = createElement('img');
            const $imageHolder = createElement('div', 'imageHolder');

            img.src = url.url;
            $imageHolder.append(img);
            $images.appendChild($imageHolder);
        });
    };
};
