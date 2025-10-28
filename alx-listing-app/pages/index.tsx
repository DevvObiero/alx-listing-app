import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          title="Sample Property" 
          description="A beautiful place to stay"
          image="/assets/sample.jpg"
        />
      </div>
      
      <div className="mt-6">
        <Button text="Book Now" onClick={() => alert('Booking!')} />
      </div>
    </div>
  );
}