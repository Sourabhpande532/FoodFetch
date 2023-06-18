import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const Title = () => (
  <a href='/'>
    <img
      className='logo'
      alt='logo'
      src='https://pbs.twimg.com/profile_images/1472170906625716233/wyw6zyp4_400x400.jpg'></img>
  </a>
);

// REACT COMPONENT
const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// PROPS -> pass props here(PROPERTY)
const Body = () => {
  return (
    <div className='restaurant-list'>
      <RestrauntCart restaurant = {restrauntList[0]}/>
      <RestrauntCart restaurant = {restrauntList[1]}/>
      <RestrauntCart restaurant = {restrauntList[2]}/>
      <RestrauntCart restaurant = {restrauntList[3]}/>
      <RestrauntCart restaurant = {restrauntList[4]}/>

      <RestrauntCart restaurant = {restrauntList[5]}/>
      <RestrauntCart restaurant = {restrauntList[6]}/>
      <RestrauntCart restaurant = {restrauntList[7]}/>
      <RestrauntCart restaurant = {restrauntList[8]}/>

      <RestrauntCart restaurant = {restrauntList[9]}/>
      <RestrauntCart restaurant = {restrauntList[10]}/>

    </div>
  );
};
const Footer = () => {
  return <h3>Footer</h3>;
};


const restrauntList = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "523123",
    "name": "Mom's Maggy mania",
    "uuid": "29c72fa9-596d-4ba9-bf5c-a48befee88d4",
    "city": "16",
    "area": "Sadar",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "ky36vdfzrtvx1enxvo1o",
    "cuisines": [
    "Snacks","Dhlokla"
    ],
    "tags": [],
    "costForTwo": 18000,
    "costForTwoString": "₹180 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 0.800000011920929,
    "slugs": {
    "restaurant": "mom's-maggy-mania-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "527, Sitabuldi, Nagpur, Maharashtra 440012, India",
    "locality": "Abhyankar Road",
    "parentId": 312094,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.8 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "523123",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "lastMileTravel": 0.800000011920929,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },


    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "56347",
    "name": "Shabana's Bakery & Kitchen",
    "uuid": "f2aebfef-976a-4507-80da-85667c48ccb8",
    "city": "16",
    "area": "Chaoni",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "wskutvs1uewnasd0xakj",
    "cuisines": [
    "Bakery",
    "Fast Food",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 23,
    "minDeliveryTime": 23,
    "maxDeliveryTime": 23,
    "slaString": "23 MINS",
    "lastMileTravel": 3,
    "slugs": {
    "restaurant": "shabanas-sadar-sadar",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "36, Koradi Rd, Byramji Town, Nagpur",
    "locality": "Koradi Road",
    "parentId": 180414,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2900,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2900,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2900",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6986532~p=22~eid=00000188-ccdb-81aa-10e7-755b00af1673",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "56347",
    "deliveryTime": 23,
    "minDeliveryTime": 23,
    "maxDeliveryTime": 23,
    "lastMileTravel": 3,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.9",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "54053",
    "name": "Pizza Hut",
    "uuid": "0f21833a-8719-4048-a39c-a80a72e8a32e",
    "city": "16",
    "area": "Sitabuldi",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "cuisines": [
    "Pizzas"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 1,
    "slugs": {
    "restaurant": "pizza-hut-1st-flr-eternity-mall-variety-square-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "SN F1 & F2, 1st Flr, Eternity Mall, Variety Square, Sitabuldi, Nagpur, Maharashtra 440012",
    "locality": "Sitabuldi",
    "parentId": 721,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "54053",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 1,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.4",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "368226",
    "name": "Maharashtrian Aaswad",
    "uuid": "a324919d-5d6a-4f56-93e4-f4f32b617c20",
    "city": "16",
    "area": "Gokulpeth",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "jigmdhmrlnfmuwkff6d6",
    "cuisines": [
    "Indian",
    "Maharashtrian",
    "Snacks",
    "North Indian",
    "Desserts",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 3.700000047683716,
    "slugs": {
    "restaurant": "maharashtrian-aaswad-dharampeth-dharampeth",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "Plot No. 137, Near Walmiki Nagar, Shankar Nagar Nagpur",
    "locality": "Shankar Nagar",
    "parentId": 8483,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2900,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2900,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2900",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7147688~p=25~eid=00000188-ccdb-81aa-10e7-755c00af190d",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3.7 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "368226",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 3.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.6",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "620948",
    "name": "Chaskaa",
    "uuid": "0c3d04d9-fdec-44cd-a4c3-b0a544dd5231",
    "city": "16",
    "area": "Sitabuldi",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "jxkexm4c2qggafkzgbvl",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "slaString": "18 MINS",
    "lastMileTravel": 1,
    "slugs": {
    "restaurant": "chaskaa-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "House No. 208/A, Regent Talkies Campus, Sitabuldi, Nagpur 440012",
    "locality": "AmBazaari Road ",
    "parentId": 14224,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "620948",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "lastMileTravel": 1,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "578720",
    "name": "Thali corner",
    "uuid": "9fb3185f-0886-4176-bd56-df49d7dd3013",
    "city": "16",
    "area": "Dharampeth",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "vmfyjexzimgukkmczpxw",
    "cuisines": [
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "thali-corner-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "Modi No 3, Shopping Corner Hodi No 3, Sitabuildi, Modi No.3, Sitabuldi, Nagpur, Maharashtra 440012, India",
    "locality": "Hanuman Street",
    "parentId": 204150,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "578720",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "588863",
    "name": "GetAWay-Desserts",
    "uuid": "a53b5940-120a-49e0-a346-c732f41812d6",
    "city": "16",
    "area": "Gokulpeth",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "2e93c40100a50e4bfabce89c35154ec6",
    "cuisines": [
    "Healthy Food",
    "Ice Cream",
    "Desserts",
    "Sweets"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 19,
    "minDeliveryTime": 19,
    "maxDeliveryTime": 19,
    "slaString": "19 MINS",
    "lastMileTravel": 3.799999952316284,
    "slugs": {
    "restaurant": "get-a-whey-healthy-ice-creams-nagpur-dharampeth",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "COMMERCIAL FIRST FLOOR F 1 F 2 INDU YASH 2 186 DHARMPETH EXTENTION RAMNAGAR CHOWK NAGPUR 440010, Nagpur urban, Nagpur-1, Maharashtra-440010",
    "locality": "Dharmpeth Extention",
    "parentId": 354819,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2900,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2900,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2900",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6954890~p=28~eid=00000188-ccdb-81aa-10e7-755d00af1c38",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3.7 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "588863",
    "deliveryTime": 19,
    "minDeliveryTime": 19,
    "maxDeliveryTime": 19,
    "lastMileTravel": 3.799999952316284,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "56382",
    "name": "Krishnum Food Plaza",
    "uuid": "f5f8a543-c4c6-4d57-b01c-589962b93779",
    "city": "16",
    "area": "Civil Lines",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "guubti1buwtjyhywkzkv",
    "cuisines": [
    "South Indian",
    "Biryani",
    "Pizzas",
    "Thalis",
    "North Indian",
    "Indian",
    "American"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "24 MINS",
    "lastMileTravel": 2.200000047683716,
    "slugs": {
    "restaurant": "krishnum-food-plaza-sadar-sadar",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "Mount Road, Sadar, Nagpur",
    "locality": "Mount Road",
    "parentId": 121089,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "56382",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 2.200000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "579495",
    "name": "Aaloo Paratha corner",
    "uuid": "e1362d22-d384-475b-a466-e022bd249dd2",
    "city": "16",
    "area": "Dharampeth",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "vocvnnn2oqzjshmj8fku",
    "cuisines": [
    "Indian",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "aaloo-paratha-corner-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "279, near White House, Modi No.3, Sitabuldi, Nagpur, Maharashtra 440012, India",
    "locality": "Sadar Bazaar Road",
    "parentId": 346992,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "579495",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "443149",
    "name": "Udupi Gokula",
    "uuid": "f71cb165-31a6-4a3a-b0e7-a8a5e33b43aa",
    "city": "16",
    "area": "Sadar",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "qla5mtyndfbgrglahah4",
    "cuisines": [
    "South Indian",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 22,
    "minDeliveryTime": 22,
    "maxDeliveryTime": 22,
    "slaString": "22 MINS",
    "lastMileTravel": 2.299999952316284,
    "slugs": {
    "restaurant": "udupi-gokula-sadar-sadar-2",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "3, Mount Rd, Opp. LIC Office, Mohan Nagar, Nagpur, Maharashtra 440001, India",
    "locality": "Mohan Nagar",
    "parentId": 258496,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7146675~p=31~eid=00000188-ccdb-81aa-10e7-755e00af1f76",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹75 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "443149",
    "deliveryTime": 22,
    "minDeliveryTime": 22,
    "maxDeliveryTime": 22,
    "lastMileTravel": 2.299999952316284,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "578076",
    "name": "Poha corner 7",
    "uuid": "700bf160-afe8-428f-83a4-8721a643027a",
    "city": "16",
    "area": "Dharampeth",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "amqg7qkjbliyr9svgl8j",
    "cuisines": [
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "slaString": "27 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "poha-corner-7-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "43VM+7HJ, Modi No.3, Sitabuldi, Nagpur, Maharashtra 440012, India",
    "locality": "Hanuman Street",
    "parentId": 346262,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "578076",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "665040",
    "name": "Tarri Poha corner",
    "uuid": "190728a1-d8ba-4c59-b405-7d95ab717cc6",
    "city": "16",
    "area": "Dharampeth",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "e71b1aadc8686c71fd92b7b979878b5d",
    "cuisines": [
    "Snacks",
    "Indian"
    ],
    "tags": [],
    "costForTwo": 10000,
    "costForTwoString": "₹100 FOR TWO",
    "deliveryTime": 38,
    "minDeliveryTime": 38,
    "maxDeliveryTime": 38,
    "slaString": "38 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "tarri-poha-corner-dharampeth-dharampeth",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "Shop No. 5-6, Modi No. 3, Sitabuldi Nagpur, Modi No.3, Sitabuldi, Nagpur, Maharashtra 440012, India",
    "locality": "Abhyankar Marg",
    "parentId": 398739,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "665040",
    "deliveryTime": 38,
    "minDeliveryTime": 38,
    "maxDeliveryTime": 38,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "419073",
    "name": "Gujrat Bhojan Gruh",
    "uuid": "f0fd75bf-5c1b-48a3-95a2-7dc98e7f51b1",
    "city": "16",
    "area": "Sitabuldi",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "e84ky3akipfv2lreplw6",
    "cuisines": [
    "Indian"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "gujrat-bhojan-gruh-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "MODI NO 3 SITABURDI NAGPUR NAGPUR URBAN NAGPUR 1 MAHARASHTRA 440012",
    "locality": "Dhantoli",
    "parentId": 233197,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "419073",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "164065",
    "name": "Raj Sweets",
    "uuid": "879581a0-1ae6-4f77-a7c8-501753b4a35c",
    "city": "16",
    "area": "Mominpura",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "xqn2gnzvctiqwfj3dxys",
    "cuisines": [
    "Sweets"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "24 MINS",
    "lastMileTravel": 1.100000023841858,
    "slugs": {
    "restaurant": "raj-sweets-gandhibagh",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "Raj Sweets, Bajeria, Nagpur, Maharashtra, India",
    "locality": "Santra Market Road",
    "parentId": 165096,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.1 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "164065",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 1.100000023841858,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.2",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "197570",
    "name": "Gangour",
    "uuid": "f43121d1-6fd9-4d5a-bbdf-84db5d3f4a57",
    "city": "16",
    "area": "Nandanvan",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "ttgitgu2ji7xywuthpis",
    "cuisines": [
    "Sweets",
    "Thalis",
    "Snacks",
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 17,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "slaString": "17 MINS",
    "lastMileTravel": 0.8999999761581421,
    "slugs": {
    "restaurant": "gangour-(veg-thali)-nandanvan-nandanvan",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "plot no 18, new cotton market layout, near S.T. Bus stand, Nagpur-440018",
    "locality": "Cotton Market Layout ",
    "parentId": 6009,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.8 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹999",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "197570",
    "deliveryTime": 17,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "lastMileTravel": 0.8999999761581421,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.6",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    },
    {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "323064",
    "name": "Food Love Way",
    "uuid": "75b65d7b-229c-4641-9a3f-c88b1c9aabfa",
    "city": "16",
    "area": "Sitabuldi",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "pmqyvvy3dtidhxwaokzh",
    "cuisines": [
    "North Indian"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 0.699999988079071,
    "slugs": {
    "restaurant": "food-love-way-sitabuldi-sitabuldi",
    "city": "nagpur"
    },
    "cityState": "16",
    "address": "MODI NO 3 SITABULDI NAGPUR 440012",
    "locality": "Hanuman Street",
    "parentId": 81573,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2400,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2400,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2400",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "323064",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 0.699999988079071,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    "parentWidget": false
    }
]

const RestrauntCart = ({restaurant}) => {
  // console.log(props)
  const {cloudinaryImageId,name,cuisines,avgRating} = restaurant.data.data;
  return (
    <div className='card'>
      <img alt='logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h5>{avgRating} Rating</h5>
    </div>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      {Footer()}
    </React.Fragment>
  );
};

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<AppLayout />);













// const RestrauntCart = ({restaurant}) => {
//   // console.log(props)
//   return (
//     <div className='card'>
//       <img alt='logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" + restaurant.data.data?.cloudinaryImageId} />
//       <h2>{restaurant.data.data?.name}</h2>
//       <h3>{restaurant.data.data?.cuisines.join(",")}</h3>
//       <h5>{restaurant.data.data?.avgRating} Rating</h5>
//     </div>
//   );
// };