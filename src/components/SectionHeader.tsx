
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  className,
  align = 'center',
}) => {
  return (
    <div 
      className={cn(
        'mb-12 space-y-2',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <p className="chip inline-block">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-3xl mx-auto mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
