import React from 'react'
// style
import styles from "./showInformation.module.css"
// component
import DetailItem from "./detailItem/DetailItem"
// icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


// item
const detailsItem = [
    { id: 1, title: 'مورد فروش', number: "4.710", icon: ShoppingCartOutlinedIcon, percent: 33, color: "#3160d8" },
    { id: 2, title: 'سفارش جدید', number: "3.721", icon: CardGiftcardIcon, percent: -2, color: "#f78b00" },
    { id: 3, title: 'محصولات کلی', number: "2.149", icon: PersonalVideoIcon, percent: 12, color: "#fbc500" },
    { id: 4, title: 'بازدیدکنندگان', number: "152.040", icon: PersonOutlineOutlinedIcon, percent: 22, color: "#91c714" },
]

function ShowInformation() {
    return (
        <div className={styles.detailsWrapper}>
            {
                detailsItem.map(item => <DetailItem key={item.id} data={item} />)
            }
        </div>
    )
}

export default ShowInformation