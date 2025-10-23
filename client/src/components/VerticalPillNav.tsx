import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { PillNavProps } from './PillNav';

interface VerticalPillNavProps extends Omit<PillNavProps, 'className'> {
  onItemClick?: (href: string) => void;
}

const VerticalPillNav: React.FC<VerticalPillNavProps> = ({ onItemClick, ...props }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return false;
    return location.pathname === href;
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Logo */}
      <Link
        to="/"
        className="rounded-full inline-flex items-center justify-center overflow-hidden w-[48px] h-[48px] mb-2 transition-transform hover:scale-110 hover:rotate-12 duration-300"
        style={{ background: props.baseColor || '#1a0b2e' }}
      >
        <img src={props.logo} alt={props.logoAlt || 'Logo'} className="w-full h-full object-cover" />
      </Link>

      {/* Pills verticales */}
      {props.items.map((item, index) => {
        const active = isActive(item.href);
        const hovered = hoveredIndex === index;
        const isRouterLink = !item.href.startsWith('#') && !item.href.startsWith('http');
        
        const pillClasses = `pill-vertical group relative overflow-hidden flex items-center justify-center min-h-[48px] px-5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
          active ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
        } ${hovered ? 'scale-110 shadow-lg' : 'hover:scale-105'}`;

        const pillStyle = {
          background: active 
            ? 'linear-gradient(135deg, #1a0b2e 0%, #1a0b2e 100%)' 
            : props.pillColor || '#6366f1',
          color: props.pillTextColor || '#ffffff',
          boxShadow: hovered ? '0 8px 32px rgba(99, 102, 241, 0.4)' : undefined
        };

        const content = (
          <>
            <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
              {item.label}
            </span>
            <span 
              className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            {active && (
              <span 
                className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
                aria-hidden="true"
              />
            )}
          </>
        );

        if (isRouterLink) {
          return (
            <Link
              key={index}
              to={item.href}
              className={pillClasses}
              style={pillStyle}
              aria-label={item.ariaLabel || item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {content}
            </Link>
          );
        }

        return (
          <a
            key={index}
            href={item.href}
            onClick={(e) => {
              if (item.href === '#language' || item.href.startsWith('#')) {
                e.preventDefault();
                onItemClick?.(item.href);
              }
            }}
            className={pillClasses}
            style={pillStyle}
            aria-label={item.ariaLabel || item.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
};

export default VerticalPillNav;
