export type Reviews = ReviewsV1;
export type Review = ReviewV1;

export type Rating = false | 'A' | 'B' | 'C' | 'D' | 'E';
export type PointScore = 'blocker' | 'bad' | 'neutral' | 'good';
export type Weight = number;

export interface RedirectReviewV1 {
  see: string;
}
export function isRedirectReview(review: ReviewV1): review is RedirectReviewV1 {
  return typeof (review as RedirectReviewV1).see === 'string';
}
export interface PointV1 {
    id: string;
    title: string;
    description: string;
    discussion: string;
    point: PointScore;
    score: Weight;
    privacyRelated?: true;
}
export interface ValidReviewV1 {
  documents: Array<{
    name: string;
    url: string;
  }>;
  logo: string;
  name: string;
  points?: PointV1[];
  rated: Rating;
  slug: string;
}
export type ReviewV1 = RedirectReviewV1 | ValidReviewV1;
export type ReviewsV1 = { [ reviewName: string ]: ReviewV1 };

export interface ServiceV1 {
  id: string
  name: string
  type: 'service' | 'software'
  urls: string[]
  freesoftware: boolean
  license?: string
  tosdr: {
    rated: Rating
    keywords: string[]
    related: string[]
  }
  meta: {
    'spec-version': string
  }
}
