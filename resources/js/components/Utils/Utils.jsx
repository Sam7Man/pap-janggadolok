import React, { useState } from 'react'

export const myPotensial = {
    'post': [
        {
            'id': 1,
            'image': 'https://i.postimg.cc/cJBrXdYX/penginapan.jpg',
            'title': 'Penginapan',
            'content': 'Tersedia 3 rumah bolon yang dapat digunakan,  wisatawan dapat menginap dengan cara memesan penginapan melalui  website ini. Untuk satu minggu menginap  wisatawan membayar seharga RP.100.000 .'
        },
        {
            'id': 2,
            'image': 'https://i.postimg.cc/8znysVsX/kolam.jpg',
            'title': 'Kolam Renang',
            'content': 'Terdapat  kolam berenang yang berjarak kurang lebih 200m dari desa jangga, terdapat 1 kolam berenang  dengan air yang bersumber dari pegunungan, kolam ini dikelilingi pepohonan rimbun di sekitar kolam. Untuk masuk wisatawan hanya membayar Rp 5.000/orang.'
        },
        {
            'id': 3,
            'image': 'https://i.postimg.cc/7PXXd5j7/sawah.png',
            'title': 'Sawah Dan Pegunungan',
            'content': 'Desa Wisata Jangga Dolok memiliki pemandangan yang sangat indah dan menarik untuk dikunjungi dimana terdapat hamparan sawah luas  yang berada dibawah kaki pegunungan yang sangat indah untuk di pandang.'
        }
    ]
}

export const myPost = {
    articles: [
        {
            "source": {
                "id": null,
                "name": "AllAfrica - Top Africa News"
            },
            "author": "Vanguard",
            "title": "The Secret Behind Bitcoin's Jump From ₦100,000 to ₦8 Million in 2 Years",
            "description": "[Vanguard] Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges, celebrated the 12th anniversary in a big way.",
            "url": "https://allafrica.com/stories/202011120244.html",
            "urlToImage": "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
            "publishedAt": "2020-11-12T08:19:13Z",
            "content": "Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges, celebrated the … [+4027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vanguard"
            },
            "author": "sunday",
            "title": "The Secret Behind Bitcoin’s Jump from ₦100,000 to ₦8 million in 2 years",
            "description": "Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges, celebrated the 12th anniversary in a big way. But for someone who hasn’t de…",
            "url": "https://www.vanguardngr.com/2020/11/the-secret-behind-bitcoins-jump-from-%e2%82%a6100000-to-%e2%82%a68-million-in-2-years/",
            "urlToImage": null,
            "publishedAt": "2020-11-09T07:50:48Z",
            "content": "Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges\r\n, celebrated th… [+3652 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Vanguard"
            },
            "author": "sunday",
            "title": "The Secret Behind Bitcoin’s Jump from ₦100,000 to ₦8 million in 2 years",
            "description": "Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges, celebrated the 12th anniversary in a big way. But for someone who hasn’t de…",
            "url": "https://www.vanguardngr.com/2020/11/the-secret-behind-bitcoins-jump-from-%e2%82%a6100000-to-%e2%82%a68-million-in-2-years/",
            "urlToImage": null,
            "publishedAt": "2020-11-01T07:50:48Z",
            "content": "Bitcoin marked its 12th anniversary on October 31st. In response, its price has jumped from $13,000 to $15,000 in less than 2 weeks. The crypto community, including Bitcoin exchanges\r\n, celebrated th… [+3652 chars]"
        },
    ]
}

export const myTestimonial = [
    {
        description:
            'Saya sangat senang selama berada di desa ini. Pemandangan yang ada sangat idah, dan kami disambut dengan sangat ramah.',
        user: 'Naldo Samosir',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        description:
            'Kami mengikuti berbagai kegiatan yang ada didesa tersebut, seperi Manortor, ikut panen padi bersama warga setempat, berenang di kolam berenang dan mengambil banyak foto di desa ini.',
        user: 'Hotnida Siagian',
        userProfile: 'https://i.postimg.cc/hvFnM84m/pp1.jpg'
    },
    {
        description:
            'Saya sangat mengagumi pemandangan yang ada di desa janggadolok ini, itu sangat memanjakan mata. Saya harap pengunjung lain dapat merasakan hal yang serupa seperti saya.',
        user: 'Zico Aritonang',
        userProfile: 'https://i.postimg.cc/ZRmtdbwP/pp2.jpg'
    }
];

export const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return {
        onChange,
        onSubmit,
        values
    }
}