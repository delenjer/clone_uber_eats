export interface IState {
  loadingModalData: boolean;
  data: any;
  restaurants: IRestaurants;
  isLoadingRestaurants: boolean;
  restaurant: IRestaurant;
  menuItems: IMenuItems;
  locationRestaurants: any;
}

export interface IAction {
  restaurants: any;
  restaurant: IRestaurant;
  type: string;
  isLoading: boolean,
  num: number,
  items: IMenuItems;
  id: string;
  isLocation: ILocation;
  idLocation: string;
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

export interface ILocation {
  data: any;
  location: {
    data: {
      locations: {
        0: string,
        1: string,
      },
      locationsMap: {
        'f6019ddf-0413-4024-b3e6-e949d8609c56': {
          title: string,
          id: string,
        },
        'd2c8cd41-8970-416c-b05b-a4418db2b2d3': {
          title: string,
          id: string,
        }
      }
    }
  },
  idLocation: string;
  id: string;
}
