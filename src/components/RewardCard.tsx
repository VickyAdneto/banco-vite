import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Tag, ExternalLink, Heart, Gift, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export type RewardType = 'gift-card' | 'coupon' | 'voucher' | 'lounge' | 'discount' | 'cashback';

export interface RewardCardProps {
  id: string;
  type: RewardType;
  title: string;
  description: string;
  brandName: string;
  brandLogo?: string;
  backgroundImage?: string;
  expiryDate: string;
  value: string;
  category: string;
  isFeatured?: boolean;
  isExclusive?: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
  redemptionType?: 'online' | 'in-store' | 'both';
  onToggleFavorite?: (id: string) => void;
  onClick?: (id: string) => void;
}

export const RewardCard: React.FC<RewardCardProps> = ({
  id,
  type,
  title,
  description,
  brandName,
  brandLogo,
  backgroundImage,
  expiryDate,
  value,
  category,
  isFeatured = false,
  isExclusive = false,
  isNew = false,
  isFavorite = false,
  redemptionType = 'online',
  onToggleFavorite,
  onClick,
}) => {
  // Format expiry date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    }).format(date);
  };

  // Type-specific styling
  const getTypeStyles = () => {
    switch (type) {
      case 'gift-card':
        return {
          icon: <Gift className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-purple-500',
          label: 'Gift Card'
        };
      case 'coupon':
        return {
          icon: <Tag className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-blue-500',
          label: 'Coupon'
        };
      case 'voucher':
        return {
          icon: <Zap className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-amber-500',
          label: 'Voucher'
        };
      case 'lounge':
        return {
          icon: <Shield className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-teal-500',
          label: 'Lounge Access'
        };
      case 'discount':
        return {
          icon: <Tag className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-green-500',
          label: 'Discount'
        };
      case 'cashback':
        return {
          icon: <Tag className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-orange-500',
          label: 'Cashback'
        };
      default:
        return {
          icon: <Tag className="h-4 w-4 mr-1" />,
          badgeColor: 'bg-gray-500',
          label: 'Reward'
        };
    }
  };

  const typeStyles = getTypeStyles();

  const handleClick = () => {
    if (onClick) onClick(id);
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`overflow-hidden hover:shadow-md transition-all cursor-pointer ${
          isExclusive ? 'border-[#97144D]/40' : ''
        }`}
        onClick={handleClick}
      >
        <div className="relative h-48">
          {backgroundImage ? (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
          )}
          
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Brand Logo */}
          {brandLogo && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
              <ImageWithFallback
                src={brandLogo}
                alt={brandName}
                className="w-20 h-20 object-contain"
              />
            </div>
          )}
          
          {/* Status badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge className={`${typeStyles.badgeColor} text-white`}>
              {typeStyles.icon} {typeStyles.label}
            </Badge>
            
            {redemptionType === 'online' && (
              <Badge className="bg-blue-500 text-white">
                Online Only
              </Badge>
            )}
            
            {redemptionType === 'in-store' && (
              <Badge className="bg-green-500 text-white">
                In-Store Only
              </Badge>
            )}
          </div>
          
          {/* Value badge */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-white text-[#97144D] font-semibold text-base px-3 py-1.5 shadow-sm">
              {value}
            </Badge>
          </div>
          
          {/* Feature/New badges */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {isFeatured && (
              <Badge className="bg-yellow-500 text-white">
                Featured
              </Badge>
            )}
            
            {isNew && (
              <Badge className="bg-[#12877F] text-white">
                New
              </Badge>
            )}
            
            {isExclusive && (
              <Badge className="bg-[#97144D] text-white">
                Exclusive
              </Badge>
            )}
          </div>
          
          {/* Favorite button */}
          <button 
            className="absolute bottom-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            onClick={handleFavoriteToggle}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="text-sm text-gray-500 font-medium">{brandName}</div>
        </CardHeader>
        
        <CardContent className="pb-2">
          <CardDescription>{description}</CardDescription>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-0">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            Expires: {formatDate(expiryDate)}
          </div>
          
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </CardFooter>
      </Card>
    </motion.div>
  );
};