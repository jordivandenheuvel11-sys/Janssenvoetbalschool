import type { StructureResolver } from 'sanity/structure';
import { getTodayInAmsterdam } from './lib/today';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Trainingsdagen')
        .schemaType('training')
        .child(
          S.documentList()
            .title('Komende trainingsdagen')
            .filter('_type == "training" && date >= $today')
            .params({ today: getTodayInAmsterdam() })
            .defaultOrdering([{ field: 'date', direction: 'asc' }]),
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'training',
      ),
    ]);
