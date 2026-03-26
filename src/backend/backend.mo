import Array "mo:base/Array";
import Time "mo:base/Time";
import Nat "mo:base/Nat";

actor {
  type Property = {
    id: Nat;
    title: Text;
    price: Text;
    location: Text;
    beds: Nat;
    baths: Nat;
    sqft: Nat;
    description: Text;
    propertyType: Text;
    featured: Bool;
  };

  type Inquiry = {
    id: Nat;
    name: Text;
    email: Text;
    phone: Text;
    message: Text;
    propertyInterest: Text;
    timestamp: Int;
  };

  type InquiryInput = {
    name: Text;
    email: Text;
    phone: Text;
    message: Text;
    propertyInterest: Text;
  };

  let seedProperties : [Property] = [
    {
      id = 1;
      title = "Azure Cliff Villa";
      price = "$12,500,000";
      location = "Malibu, California";
      beds = 6;
      baths = 7;
      sqft = 9800;
      description = "A breathtaking oceanfront masterpiece perched atop Malibu's most coveted cliffs. Featuring an infinity pool, private beach access, and panoramic Pacific views from every room.";
      propertyType = "Villa";
      featured = true;
    },
    {
      id = 2;
      title = "The Pinnacle Penthouse";
      price = "$8,750,000";
      location = "Manhattan, New York";
      beds = 4;
      baths = 5;
      sqft = 6200;
      description = "An iconic duplex penthouse crowning one of Manhattan's most prestigious towers. Floor-to-ceiling glass walls offer unparalleled 360-degree city skyline views.";
      propertyType = "Penthouse";
      featured = true;
    },
    {
      id = 3;
      title = "Palazzo Sereno Estate";
      price = "$18,900,000";
      location = "Palm Beach, Florida";
      beds = 8;
      baths = 10;
      sqft = 15400;
      description = "A grand Mediterranean estate spanning over 3 acres of manicured grounds. Classical European architecture meets modern luxury in this one-of-a-kind Palm Beach masterpiece.";
      propertyType = "Estate";
      featured = true;
    },
    {
      id = 4;
      title = "Alpine Crown Chalet";
      price = "$6,200,000";
      location = "Aspen, Colorado";
      beds = 5;
      baths = 6;
      sqft = 7100;
      description = "An exquisite ski-in/ski-out chalet offering unrivaled mountain panoramas. Warmed by natural stone fireplaces and custom timber finishes, this is the ultimate alpine retreat.";
      propertyType = "Chalet";
      featured = false;
    },
    {
      id = 5;
      title = "Desert Mirage Villa";
      price = "$9,400,000";
      location = "Scottsdale, Arizona";
      beds = 5;
      baths = 6;
      sqft = 8300;
      description = "A sculptural desert sanctuary where dramatic architecture harmonizes with the Sonoran landscape. Features an infinity-edge pool, outdoor entertaining pavilion, and spa.";
      propertyType = "Villa";
      featured = true;
    },
    {
      id = 6;
      title = "Riviera Bleu Mansion";
      price = "$22,000,000";
      location = "Miami Beach, Florida";
      beds = 7;
      baths = 9;
      sqft = 12800;
      description = "A spectacular waterfront mansion on exclusive Star Island. With 200 feet of deep water frontage, private yacht dock, and resort-style amenities, this is Miami living at its finest.";
      propertyType = "Estate";
      featured = false;
    }
  ];

  stable var inquiries : [Inquiry] = [];
  stable var nextInquiryId : Nat = 1;

  public query func getProperties() : async [Property] {
    seedProperties
  };

  public query func getFeaturedProperties() : async [Property] {
    Array.filter<Property>(seedProperties, func(p) { p.featured })
  };

  public query func getProperty(id: Nat) : async ?Property {
    Array.find<Property>(seedProperties, func(p) { p.id == id })
  };

  public func submitInquiry(input: InquiryInput) : async Nat {
    let inquiry : Inquiry = {
      id = nextInquiryId;
      name = input.name;
      email = input.email;
      phone = input.phone;
      message = input.message;
      propertyInterest = input.propertyInterest;
      timestamp = Time.now();
    };
    inquiries := Array.append(inquiries, [inquiry]);
    nextInquiryId += 1;
    inquiry.id
  };

  public query func getInquiries() : async [Inquiry] {
    inquiries
  };
};
