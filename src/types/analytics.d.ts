interface Window {
  op?: (...args: any[]) => void;
  opQ?: any[];
}

type AnalyticsEvent = {
  page_view: {
    page_name: string;
    section?: string;
  };
  cta_clicked: {
    section: string;
    button_text: string;
  };
  tier_selected: {
    tier_id: string;
    tier_name: string;
    price: number;
  };
  signup_attempt: {
    tier_id: string;
    tier_name: string;
    price: number;
  };
  signup_success: {
    tier_id: string;
    tier_name: string;
    price: number;
  };
  signup_error: {
    error: string;
    tier_id?: string;
    tier_name?: string;
  };
};
