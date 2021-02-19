export interface IState {
  data: any;
  restaurants: IRestaurants;
  isLoadingRestaurants: boolean;
}

export interface IAction {
  restaurants: any;
  type: string;
  isLoading: boolean,
  num: number,
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
