export type Service = ServiceV2;

export type Rating = false | 'A' | 'B' | 'C' | 'D' | 'E';

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

// Based on https://github.com/tosdr/phoenix/issues/523
type Filename = string;
type Classification = 'blocker' | 'bad' | 'neutral' | 'good';
export interface Quote {
  quoteStart: number;
  quoteEnd: number;
  quoteText: string;
  caseId: number;
  caseTitle: string;
  caseClassification: Classification;
  caseWeight: number;
}
export type Documents = Record<
  Filename,
  {
    topRev: string;
    url: string;
    xPath: string;
    points: Quote[];
  }
>;
export interface ServiceV2 {
  id: number;
  domains: string[];
  name: string;
  logo?: string;
  wikipedia?: string;
  twitter?: string;
  docs: Documents;
  class: Rating;
}
