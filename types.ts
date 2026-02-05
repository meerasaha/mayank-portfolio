
import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'professional';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
