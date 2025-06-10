import { useState } from "react";
import { AxisButton } from "./AxisButton";
import { AxisSearch } from "./AxisSearch";
import { ChevronRight, Search, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const ComponentsShowcase = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    
    setIsLoading(true);
    
    // Simulating an API call
    setTimeout(() => {
      setSearchResults([
        `Result for "${value}" - Rewards`,
        `Result for "${value}" - Offers`,
        `Result for "${value}" - Discounts`,
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleMicClick = () => {
    alert("Voice search is not implemented in this demo");
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Axis Bank Components</h2>
      
      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="buttons" className="w-full">Buttons</TabsTrigger>
          <TabsTrigger value="search" className="w-full">Search</TabsTrigger>
        </TabsList>
        
        {/* Buttons Showcase */}
        <TabsContent value="buttons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AxisButton variant="primary">Primary Button</AxisButton>
                <AxisButton variant="secondary">Secondary Button</AxisButton>
                <AxisButton variant="outline">Outline Button</AxisButton>
                <AxisButton variant="ghost">Ghost Button</AxisButton>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AxisButton size="sm">Small Button</AxisButton>
                <AxisButton size="md">Medium Button</AxisButton>
                <AxisButton size="lg">Large Button</AxisButton>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Button with Icons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AxisButton icon={<Search size={18} />} iconPosition="left">
                  Icon Left
                </AxisButton>
                <AxisButton icon={<ChevronRight size={18} />} iconPosition="right">
                  Icon Right
                </AxisButton>
                <AxisButton variant="secondary" icon={<Search size={18} />} iconPosition="left">
                  Secondary with Icon
                </AxisButton>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AxisButton fullWidth>Full Width Button</AxisButton>
                <AxisButton disabled>Disabled Button</AxisButton>
                <AxisButton loading>Loading Button</AxisButton>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Search Showcase */}
        <TabsContent value="search">
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Search Component</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="max-w-xl mx-auto">
                  <h3 className="text-lg font-medium mb-4">Basic Search</h3>
                  <AxisSearch 
                    placeholder="Search for rewards, offers, etc."
                    value={searchValue}
                    onChange={setSearchValue}
                    onSearch={handleSearch}
                    onMicClick={handleMicClick}
                    rightElement={
                      searchValue ? 
                        <X 
                          size={18} 
                          className="cursor-pointer text-gray-500 hover:text-gray-700" 
                          onClick={clearSearch} 
                        /> : 
                        undefined
                    }
                  />
                  
                  {isLoading && (
                    <div className="flex justify-center mt-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#97144d]"></div>
                    </div>
                  )}
                  
                  {searchResults.length > 0 && !isLoading && (
                    <div className="mt-4 border rounded-lg overflow-hidden">
                      {searchResults.map((result, index) => (
                        <div 
                          key={index} 
                          className="p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer flex items-center"
                        >
                          <Search size={16} className="text-gray-400 mr-2" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Disabled Search</h3>
                    <AxisSearch 
                      placeholder="Disabled search"
                      disabled
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Autofocused Search</h3>
                    <AxisSearch 
                      placeholder="Autofocused search"
                      autoFocus
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};