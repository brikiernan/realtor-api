import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

const CentroidType = new GraphQLObjectType({
  name: 'Centroid',
  fields: () => ({
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat }
  })
});

const AutocompleteType = new GraphQLObjectType({
  name: 'Autocomplete',
  fields: () => ({
    area_type: { type: GraphQLString },
    _id: { type: GraphQLID },
    _score: { type: GraphQLFloat },
    mpr_id: { type: GraphQLID },
    full_address: { type: new GraphQLList(GraphQLString) },
    line: { type: GraphQLString },
    city: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    state_code: { type: GraphQLString },
    country: { type: GraphQLString },
    centroid: { type: CentroidType },
    prop_status: { type: new GraphQLList(GraphQLString) },
    validation_code: { type: new GraphQLList(GraphQLString) }
  })
});

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    city_slug_id: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    state: { type: GraphQLString },
    county: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString }
  })
});

const RangeType = new GraphQLObjectType({
  name: 'Range',
  fields: () => ({
    low: { type: GraphQLString },
    high: { type: GraphQLString }
  })
});

const GradesType = new GraphQLObjectType({
  name: 'Grades',
  fields: () => ({
    range: { type: RangeType }
  })
});

const RatingsType = new GraphQLObjectType({
  name: 'Ratings',
  fields: () => ({
    great_schools_rating: { type: GraphQLInt },
    parent_rating: { type: GraphQLInt }
  })
});

const SchoolsType = new GraphQLObjectType({
  name: 'Schools',
  fields: () => ({
    nces_id: { type: GraphQLID },
    id: { type: GraphQLID },
    greatschools_id: { type: GraphQLID },
    name: { type: GraphQLString },
    education_levels: { type: new GraphQLList(GraphQLString) },
    funding_type: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    student_count: { type: GraphQLInt },
    student_teacher_ratio: { type: GraphQLFloat },
    location: { type: LocationType },
    phone: { type: GraphQLString },
    distance_in_miles: { type: GraphQLFloat },
    grades: { type: GradesType },
    relevance: { type: GraphQLString },
    ratings: { type: RatingsType }
  })
});

const BrandingSubDetailsType = new GraphQLObjectType({
  name: 'BrandingSubDetails',
  fields: () => ({
    name: { type: GraphQLString },
    photo: { type: GraphQLString },
    phone: { type: GraphQLString },
    slogan: { type: GraphQLString },
    show_realtor_logo: { type: GraphQLBoolean },
    link: { type: GraphQLString },
    accent_color: { type: GraphQLString }
  })
});

const BrandingSubType = new GraphQLObjectType({
  name: 'BrandingSub',
  fields: () => ({
    photo_attribution: { type: BrandingSubDetailsType },
    details: { type: BrandingSubDetailsType }
  })
});

const BrandingDetailsType = new GraphQLObjectType({
  name: 'BrandingDetails',
  fields: () => ({
    listing_agent: { type: BrandingSubType },
    listing_office: { type: BrandingSubType },
    team_name: { type: GraphQLString }
  })
});

const BrandingForSalesType = new GraphQLObjectType({
  name: 'BrandingForSale',
  fields: () => ({
    listing_office: { type: BrandingSubType }
  })
});

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    city: { type: GraphQLString },
    line: { type: GraphQLString },
    street_direction: { type: GraphQLString },
    street_post_direction: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    address_validation_code: { type: GraphQLString },
    state_code: { type: GraphQLString },
    state: { type: GraphQLString },
    county: { type: GraphQLString },
    fips_code: { type: GraphQLString },
    time_zone: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    neighborhood_name: { type: GraphQLString }
  })
});

const FeaturesType = new GraphQLObjectType({
  name: 'Features',
  fields: () => ({
    category: { type: GraphQLString },
    parent_category: { type: GraphQLString },
    text: { type: new GraphQLList(GraphQLString) }
  })
});

const DisclaimerType = new GraphQLObjectType({
  name: 'Disclaimer',
  fields: () => ({
    photo: { type: GraphQLString },
    href: { type: GraphQLString },
    text: { type: GraphQLString }
  })
});

const MLSType = new GraphQLObjectType({
  name: 'MLS',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLString },
    plan_id: { type: GraphQLString },
    abbreviation: { type: GraphQLString },
    type: { type: GraphQLString },
    disclaimer: { type: DisclaimerType }
  })
});

const MatterportsType = new GraphQLObjectType({
  name: 'Matterports',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    thumb_url: { type: GraphQLString }
  })
});

const HrefType = new GraphQLObjectType({
  name: 'Href',
  fields: () => ({
    href: { type: GraphQLString }
  })
});

const ClientDisplayFlagsType = new GraphQLObjectType({
  name: 'ClientDisplayFlags',
  fields: () => ({
    presentation_status: { type: GraphQLString },
    is_showcase: { type: GraphQLBoolean },
    lead_form_phone_required: { type: GraphQLBoolean },
    price_change: { type: GraphQLInt },
    is_co_broke_email: { type: GraphQLBoolean },
    has_open_house: { type: GraphQLBoolean },
    is_foreclosure: { type: GraphQLBoolean },
    is_short_sale: { type: GraphQLBoolean },
    is_co_broke_phone: { type: GraphQLBoolean },
    is_new_listing: { type: GraphQLBoolean },
    is_new_plan: { type: GraphQLBoolean },
    is_new_construction: { type: GraphQLBoolean },
    is_turbo: { type: GraphQLBoolean },
    is_office_standard_listing: { type: GraphQLBoolean },
    suppress_map_pin: { type: GraphQLBoolean },
    is_contingent: { type: GraphQLBoolean },
    show_contact_a_lender_in_lead_form: { type: GraphQLBoolean },
    show_veterans_united_in_lead_form: { type: GraphQLBoolean },
    is_showcase_choice_enabled: { type: GraphQLBoolean },
    is_recently_sold: { type: GraphQLBoolean }
  })
});

const AssessmentType = new GraphQLObjectType({
  name: 'Assessment',
  fields: () => ({
    building: { type: GraphQLInt },
    land: { type: GraphQLInt },
    total: { type: GraphQLInt }
  })
});

const TaxHistoryType = new GraphQLObjectType({
  name: 'TaxHistory',
  fields: () => ({
    assessment: { type: AssessmentType },
    tax: { type: GraphQLInt },
    year: { type: GraphQLString }
  })
});

const ListingType = new GraphQLObjectType({
  name: 'Listing',
  fields: () => ({
    price: { type: GraphQLInt }
  })
});

const SoldHistoryType = new GraphQLObjectType({
  name: 'SoldHistory',
  fields: () => ({
    date: { type: GraphQLString },
    source: { type: GraphQLString },
    listing: { type: ListingType }
  })
});

const PropertyHistoryType = new GraphQLObjectType({
  name: 'PropertyHistory',
  fields: () => ({
    event_name: { type: GraphQLString },
    date: { type: GraphQLString },
    price: { type: GraphQLInt },
    price_changed: { type: GraphQLInt },
    sqft: { type: GraphQLInt },
    datasource_name: { type: GraphQLString },
    source: { type: GraphQLString }
  })
});

const PublicRecordsType = new GraphQLObjectType({
  name: 'PublicRecords',
  fields: () => ({
    baths: { type: GraphQLInt },
    baths_half: { type: GraphQLInt },
    baths_full: { type: GraphQLInt },
    baths_3qtr: { type: GraphQLInt },
    baths_1qtr: { type: GraphQLInt },
    beds: { type: GraphQLInt },
    construction: { type: GraphQLString },
    cooling: { type: GraphQLString },
    cl_id: { type: GraphQLID },
    date_updated: { type: GraphQLString },
    distinct_baths: { type: GraphQLInt },
    exterior1: { type: GraphQLString },
    fireplace: { type: GraphQLString },
    garage: { type: GraphQLString },
    garage_spaces: { type: GraphQLInt },
    heating: { type: GraphQLString },
    lot_size: { type: GraphQLInt },
    pool: { type: GraphQLString },
    prop_type: { type: GraphQLString },
    roofing: { type: GraphQLString },
    rooms: { type: GraphQLInt },
    sqft: { type: GraphQLInt },
    stories: { type: GraphQLInt },
    style: { type: new GraphQLList(GraphQLString) },
    units: { type: GraphQLInt },
    year_built: { type: GraphQLInt },
    year_renovated: { type: GraphQLInt },
    view: { type: GraphQLString }
  })
});

const OfficeType = new GraphQLObjectType({
  name: 'Office',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    phones: { type: new GraphQLList(GraphQLString) }
  })
});

const AgentsType = new GraphQLObjectType({
  name: 'Agents',
  fields: () => ({
    primary: { type: GraphQLBoolean },
    advertiser_id: { type: GraphQLID },
    id: { type: GraphQLID },
    photo: { type: HrefType },
    name: { type: GraphQLString }
  })
});

const SizeType = new GraphQLObjectType({
  name: 'Size',
  fields: () => ({
    size: { type: GraphQLInt },
    units: { type: GraphQLString }
  })
});

const PhotosType = new GraphQLObjectType({
  name: 'Photos',
  fields: () => ({
    description: { type: GraphQLString },
    href: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) }
  })
});

const DetailType = new GraphQLObjectType({
  name: 'Detail',
  fields: () => ({
    property_id: { type: GraphQLString },
    prop_status: { type: GraphQLString },
    prop_type: { type: GraphQLString },
    suppression_flags: { type: new GraphQLList(GraphQLString) },
    list_date: { type: GraphQLString },
    last_update: { type: GraphQLString },
    year_built: { type: GraphQLInt },
    listing_status: { type: GraphQLString },
    beds: { type: GraphQLInt },
    description: { type: GraphQLString },
    baths_full: { type: GraphQLInt },
    baths_half: { type: GraphQLInt },
    stories: { type: GraphQLInt },
    schools: { type: new GraphQLList(SchoolsType) },
    garage: { type: GraphQLString },
    heating: { type: GraphQLString },
    cooling: { type: GraphQLString },
    pool: { type: GraphQLBoolean },
    style: { type: GraphQLString },
    feature_tags: { type: new GraphQLList(GraphQLString) },
    branding: { type: BrandingDetailsType },
    address: { type: AddressType },
    features: { type: new GraphQLList(FeaturesType) },
    mls: { type: MLSType },
    matterports: { type: new GraphQLList(MatterportsType) },
    virtual_tour: { type: HrefType },
    client_display_flags: { type: ClientDisplayFlagsType },
    tax_history: { type: new GraphQLList(TaxHistoryType) },
    sold_history: { type: new GraphQLList(SoldHistoryType) },
    property_history: { type: new GraphQLList(PropertyHistoryType) },
    public_records: { type: new GraphQLList(PublicRecordsType) },
    office: { type: OfficeType },
    agents: { type: new GraphQLList(AgentsType) },
    lot_size: { type: SizeType },
    building_size: { type: SizeType },
    price: { type: GraphQLInt },
    rdc_web_url: { type: GraphQLString },
    rdc_app_url: { type: GraphQLString },
    homevalue_web_url: { type: GraphQLString },
    baths: { type: GraphQLInt },
    photo_count: { type: GraphQLInt },
    data_source_name: { type: GraphQLString },
    detail_tracking: { type: GraphQLString },
    photos: { type: new GraphQLList(PhotosType) }
  })
});

const SoldType = new GraphQLObjectType({
  name: 'Sold',
  fields: () => ({
    property_id: { type: GraphQLString },
    prop_type: { type: GraphQLString },
    list_date: { type: GraphQLString },
    last_update: { type: GraphQLString },
    year_built: { type: GraphQLInt },
    beds: { type: GraphQLInt },
    baths_full: { type: GraphQLInt },
    baths_half: { type: GraphQLInt },
    prop_status: { type: GraphQLString },
    address: { type: AddressType },
    client_display_flags: { type: ClientDisplayFlagsType },
    sold_history: { type: new GraphQLList(SoldHistoryType) },
    agents: { type: new GraphQLList(AgentsType) },
    lot_size: { type: SizeType },
    building_size: { type: SizeType },
    price: { type: GraphQLInt },
    rdc_web_url: { type: GraphQLString },
    rdc_app_url: { type: GraphQLString },
    baths: { type: GraphQLInt },
    data_source_name: { type: GraphQLString },
    page_no: { type: GraphQLInt },
    rank: { type: GraphQLInt },
    list_tracking: { type: GraphQLString },
    is_new_construction: { type: GraphQLBoolean },
    photo_count: { type: GraphQLString },
    photos: { type: new GraphQLList(PhotosType) }
  })
});

const ForSaleType = new GraphQLObjectType({
  name: 'ForSale',
  fields: () => ({
    property_id: { type: GraphQLString },
    listing_id: { type: GraphQLString },
    rdc_web_url: { type: GraphQLString },
    prop_type: { type: GraphQLString },
    virtual_tour: { type: HrefType },
    address: { type: AddressType },
    branding: { type: BrandingForSalesType },
    prop_status: { type: GraphQLString },
    price: { type: GraphQLInt },
    baths_full: { type: GraphQLInt },
    baths_half: { type: GraphQLInt },
    baths: { type: GraphQLInt },
    beds: { type: GraphQLInt },
    building_size: { type: SizeType },
    agents: { type: new GraphQLList(AgentsType) },
    office: { type: OfficeType },
    last_update: { type: GraphQLString },
    client_display_flags: { type: ClientDisplayFlagsType },
    photo_count: { type: GraphQLInt },
    thumbnail: { type: GraphQLString },
    page_no: { type: GraphQLInt },
    rank: { type: GraphQLInt },
    lot_size: { type: SizeType },
    mls: { type: MLSType }
  })
});

const AgentAddressType = new GraphQLObjectType({
  name: 'AgentAddress',
  fields: () => ({
    line: { type: GraphQLString },
    line2: { type: GraphQLString },
    city: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    state_code: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString }
  })
});

const AgentBrokerType = new GraphQLObjectType({
  name: 'AgentBroker',
  fields: () => ({
    fulfillment_id: { type: GraphQLInt },
    designations: { type: new GraphQLList(GraphQLString) },
    name: { type: GraphQLString },
    accent_color: { type: GraphQLString },
    photo: { type: HrefType },
    video: { type: GraphQLString }
  })
});

const AgentMemberType = new GraphQLObjectType({
  name: 'AgentMember',
  fields: () => ({
    id: { type: GraphQLID }
  })
});

const AgentMLSType = new GraphQLObjectType({
  name: 'AgentMLS',
  fields: () => ({
    member: { type: AgentMemberType },
    abbreviation: { type: GraphQLString },
    type: { type: GraphQLString },
    primary: { type: GraphQLBoolean }
  })
});

const AgentOfficePhonesType = new GraphQLObjectType({
  name: 'AgentOfficePhones',
  fields: () => ({
    ext: { type: GraphQLString },
    number: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});

const AgentOfficePhoneListType = new GraphQLObjectType({
  name: 'AgentOfficePhoneList',
  fields: () => ({
    phone_1: { type: AgentOfficePhonesType }
  })
});

const AgentOfficeType = new GraphQLObjectType({
  name: 'AgentOffice',
  fields: () => ({
    name: { type: GraphQLString },
    mls: { type: new GraphQLList(AgentMLSType) },
    phones: { type: new GraphQLList(AgentOfficePhonesType) },
    phone_list: { type: AgentOfficePhoneListType },
    photo: { type: HrefType },
    slogan: { type: GraphQLString },
    website: { type: GraphQLString },
    video: { type: GraphQLString },
    fulfillment_id: { type: GraphQLInt },
    address: { type: AgentAddressType },
    email: { type: GraphQLString },
    party_id: { type: GraphQLID },
    nrds_id: { type: GraphQLID }
  })
});

const AgentPhonesType = new GraphQLObjectType({
  name: 'AgentPhones',
  fields: () => ({
    ext: { type: GraphQLString },
    number: { type: GraphQLString },
    type: { type: GraphQLString },
    key: { type: GraphQLString }
  })
});

const ForSalePriceType = new GraphQLObjectType({
  name: 'ForSalePrice',
  fields: () => ({
    count: { type: GraphQLInt },
    min: { type: GraphQLInt },
    max: { type: GraphQLInt },
    last_listing_date: { type: GraphQLString }
  })
});

const RecentlySoldType = new GraphQLObjectType({
  name: 'RecentlySold',
  fields: () => ({
    count: { type: GraphQLInt },
    last_sold_date: { type: GraphQLString },
    max: { type: GraphQLInt },
    min: { type: GraphQLInt }
  })
});

const AgentTeamDetailsType = new GraphQLObjectType({
  name: 'AgentTeamDetails',
  fields: () => ({
    is_team_member: { type: GraphQLBoolean },
    team_advertiser_id: { type: GraphQLInt }
  })
});

const AgentDetailType = new GraphQLObjectType({
  name: 'AgentDetail',
  fields: () => ({
    address: { type: AgentAddressType },
    advertiser_id: { type: GraphQLInt },
    agent_rating: { type: GraphQLInt },
    broker: { type: AgentBrokerType },
    description: { type: GraphQLString },
    designations: { type: new GraphQLList(GraphQLString) },
    first_month: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    first_year: { type: GraphQLInt },
    has_photo: { type: GraphQLBoolean },
    href: { type: GraphQLString },
    id: { type: GraphQLID },
    is_realtor: { type: GraphQLBoolean },
    languages: { type: new GraphQLList(GraphQLString) },
    last_name: { type: GraphQLString },
    last_updated: { type: GraphQLString },
    mls: { type: new GraphQLList(AgentMLSType) },
    nar_only: { type: GraphQLInt },
    nick_name: { type: GraphQLString },
    nrds_id: { type: GraphQLID },
    office: { type: AgentOfficeType },
    party_id: { type: GraphQLInt },
    person_name: { type: GraphQLString },
    phones: { type: new GraphQLList(AgentPhonesType) },
    photo: { type: HrefType },
    title: { type: GraphQLString },
    types: { type: GraphQLString },
    recommendations_count: { type: GraphQLInt },
    review_count: { type: GraphQLInt },
    role: { type: GraphQLString },
    email: { type: GraphQLString },
    full_name: { type: GraphQLString },
    name: { type: GraphQLString },
    agent_type: { type: new GraphQLList(GraphQLString) },
    for_sale_price: { type: ForSalePriceType },
    recently_sold: { type: RecentlySoldType },
    agent_team_details: { type: AgentTeamDetailsType }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    autocomplete: {
      type: new GraphQLList(AutocompleteType),
      args: { input: { type: GraphQLString } },
      async resolve(_, { input }) {
        const { getAddresses } = await import('../resolvers');
        return await getAddresses(input);
      }
    },
    propertyDetail: {
      type: DetailType,
      args: { property_id: { type: GraphQLString } },
      async resolve(_, { property_id }) {
        const { getDetail } = await import('../resolvers');
        return await getDetail(property_id);
      }
    },
    propertiesSold: {
      type: new GraphQLList(SoldType),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        city: { type: GraphQLString },
        state_code: { type: GraphQLString },
        postal_code: { type: GraphQLString },
        prop_type: { type: GraphQLString },
        sort: { type: GraphQLString },
        radius: { type: GraphQLInt },
        price_min: { type: GraphQLInt },
        price_max: { type: GraphQLInt },
        baths_min: { type: GraphQLInt },
        beds_min: { type: GraphQLInt },
        sqft_min: { type: GraphQLInt },
        sqft_max: { type: GraphQLInt },
        age_min: { type: GraphQLInt },
        age_max: { type: GraphQLInt },
        lot_sqft_min: { type: GraphQLInt },
        lot_sqft_max: { type: GraphQLInt }
      },
      async resolve(_, args) {
        const { getSolds } = await import('../resolvers');
        return await getSolds(args);
      }
    },
    propertiesForSale: {
      type: new GraphQLList(ForSaleType),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        city: { type: GraphQLString },
        state_code: { type: GraphQLString },
        postal_code: { type: GraphQLString },
        prop_type: { type: GraphQLString },
        sort: { type: GraphQLString },
        radius: { type: GraphQLInt },
        price_min: { type: GraphQLInt },
        price_max: { type: GraphQLInt },
        baths_min: { type: GraphQLInt },
        beds_min: { type: GraphQLInt },
        sqft_min: { type: GraphQLInt },
        sqft_max: { type: GraphQLInt },
        age_min: { type: GraphQLInt },
        age_max: { type: GraphQLInt },
        lot_sqft_min: { type: GraphQLInt },
        lot_sqft_max: { type: GraphQLInt },
        is_matterports: { type: GraphQLString },
        is_foreclosure: { type: GraphQLString },
        is_contingent: { type: GraphQLString },
        is_pending: { type: GraphQLString },
        has_open_house: { type: GraphQLString },
        is_new_construction: { type: GraphQLString },
        is_new_plan: { type: GraphQLString },
        features: { type: GraphQLString },
        prop_sub_type: { type: GraphQLString }
      },
      async resolve(_, args) {
        const { getForSales } = await import('../resolvers');
        return await getForSales(args);
      }
    },
    agents: {
      type: new GraphQLList(AgentDetailType),
      args: {
        postal_code: { type: GraphQLString },
        sort: { type: GraphQLString },
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        name: { type: GraphQLString },
        types: { type: GraphQLString },
        recommendations_count_min: { type: GraphQLInt },
        agent_rating_min: { type: GraphQLInt },
        price_min: { type: GraphQLInt },
        agent_type: { type: GraphQLString },
        price_max: { type: GraphQLInt }
      },
      async resolve(_, args) {
        const { getAgents } = await import('../resolvers');
        return await getAgents(args);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQueryType
});
