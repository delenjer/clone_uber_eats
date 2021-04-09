export interface IState {
  data: any;
  restaurants: IRestaurants;
  isLoadingRestaurants: boolean;
  restaurant: IRestaurant;
  menuItems: IMenuItems;
}

export interface IAction {
  restaurants: any;
  restaurant: IRestaurant;
  type: string;
  isLoading: boolean,
  num: number,
  items: IMenuItems;
  id: string;
}

export interface IRestaurants {
  categories: string[];
  citySlug: string;
  closedMessage: string;
  endorsement: null;
  etaRange: {
    text: string,
    iconUrl: string,
  };
  fareBadge: null;
  feedback: {
    rating: number,
    ratingCount: string,
  };
  heroImageUrl: string;
  isDeliveryThirdParty: boolean;
  isOpen: boolean;
  promoTrackings: [];
  promotion: null;
  slug: string;
  title: string;
  uuid: string;
}

export interface IRestaurant {
  data: {
    categories: string[];
    citySlug: string;
    closedMessage: string;
    cuisineList: string[];
    currencyCode: string;
    disableCheckoutInstruction: boolean;
    disableOrderInstruction: boolean;
    disclaimerBadge: {
      text: string;
    };
    distanceBadge: boolean;
    entitiesMap: any;
    etaRange: boolean;
    fareBadge: boolean;
    fareInfo: {
      serviceFeeCents: boolean;
    };
    heroImageUrls: [{
      url: string,
      width: number,
    }];
    hours: any;
    isDeliveryOverTheTop: boolean;
    isDeliveryThirdParty: boolean;
    isOpen: boolean;
    isPreview: boolean;
    isWithinDeliveryRange: boolean;
    location: {
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
    };
    metaJson: string;
    nuggets: [];
    phoneNumber: string;
    pinnedInfo: null;
    priceBucket: string;
    promoTrackings: [];
    promotion: null;
    ratingBadge: {
      text: string,
    };
    sections: string[];
    sectionsMap: any;
    shouldIndex: boolean;
    slug: string;
    suggestedPromotion: {
      text: string,
      promotionUuid: string,
    };
    supportedDiningModes: any;
    title: string;
    uuid: string;
    status: string;
  };
}

export interface IMenuItems {
  menuItems: {
    data: {
      itemDescription: string;
      price: number;
      sectionUuid: string;
      subsectionUuid: string;
      title: string;
      uuid: string;
      customizationsList: [{
        maxPermitted:	number;
        minPermitted:	number;
        parentCustomizationOptionUuids:	any[];
        title:	string;
        uuid:	string;
        displayState:	string;
        options: any[];
      }];
      imageUrl: string;
    },
  },
  isChecked: boolean;
}

export interface matchI {
  isExact: boolean;
  params: {
    uuid: string,
  };
  path: string;
  url: string;
}

export interface historyI {
  goBack: () => void,
  location: {
    hash: string,
    pathname: string,
    search: string,
  }
}
