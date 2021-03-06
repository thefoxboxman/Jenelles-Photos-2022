
export default{
      title: 'Photo',
      name: 'photo',
      type: 'document',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                            .toLowerCase()
                            .replace(/[^A-Z0-9 ]+/ig, "")
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
                    }
        },          
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Created_At',
          name: 'createdAt',
          type: 'datetime',
        },
        {
          title: 'Awards',
          name: 'awards',
          type: 'boolean',
        },
        {
          title: 'Astro',
          name: 'astro',
          type: 'boolean',
        },
        {
          title: 'Fauna',
          name: 'fauna',
          type: 'boolean',
        },
        {
          title: 'Flora',
          name: 'flora',
          type: 'boolean',
        },
        {
          title: 'Landscapes',
          name: 'landscapes',
          type: 'boolean',
        },
        {
          title: 'Macro',
          name: 'macro',
          type: 'boolean',
        },
      ],
    }
